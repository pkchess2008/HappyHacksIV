import { ClerkProvider } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';


interface Friends {
    name: string;
    id: string;
    image: string;
    email: string;
}

export default function FriendsManager() {
    const [friends, setFriends] = useState<Friends[]>([
        { name: "Robin", id: "1", image: "image.png", email: "robin@hood.com"},
        { name: "Batman", id: "2", image: "image.png", email: "bat@man.com"}
    ])
    const [suggested, setSuggested] = useState<Friends[]>([
        { name: "Joker", id: "3", image: "joker.png", email: "joker@hood.com"},
        { name: "Curry", id: "4", image: "curry.png", email: "steph@man.com"}
    ])
    const user = useUser();

    function friend(val: Friends) {
        // fetch(`/friend_user`,{
        //     body: JSON.stringify({
        //         user_id: user.user?.id,
        //         friend_id: fid.id
        //     }),
        //     method: "POST"
        // })
        setSuggested(prev => [...prev, val])
    }

    function unfriend(val: Friends) {
        // fetch(`/unfriend_user`,{
        //     body: JSON.stringify({
        //         user_id: user.user?.id,
        //         friend_id: fid.id
        //     }),
        //     method: "POST"
        // })
        setFriends(prev => prev.filter((value) => value.id !== val.id))
    }

    useEffect(() => {
        if (user.user?.id) {
            fetch(`/get_friends?user_id=${user.user?.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setFriends(data.friends)
                    setSuggested(data.suggested)
                })
        }
    }, [user])

    return (
        <ClerkProvider>
            <div>
                <h1>Friends</h1>
                {friends.map(values => {
                    return (
                        <div style={{ display: "flex" }}>
                            <h2>{values.name}</h2>
                            <h3>{values.email}</h3>
                            <button onClick={() => unfriend(values)}>Unfriend</button>
                        </div>
                    )
                })}
            </div>
            <div>
            <h1>Suggested Friends</h1>
                {suggested.map(values => {
                    return (
                        <div style={{ display: "flex" }}>
                            <h2>{values.name}</h2>
                            <h3>{values.email}</h3>
                            <button onClick={() => friend(values)}>Friend</button>
                        </div>
                    )
                })}
            </div>
        </ClerkProvider>
    )
}