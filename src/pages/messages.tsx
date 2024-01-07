import { useState, useEffect } from "react"
import { useRouter } from "next/router";

interface Chat {
    name: string;
    id: string
}

export default function Messages() {

    const router = useRouter();

    const [chats, setChats] = useState<Chat[]>([
        {
           name: "Robin",
           id: "1", 
        },
        {
            name: "Batman",
            id: "2",
        }
    ])
    // useEffect(() => {
    //     const users = useUser();
    //     fetch(`/get_chats?user_id=${user.user?.id}`)
    //         .then((res) => res.json())
    //         .then((data) => setChats(data.chats))
    // }, [])

    return (
            <div>
                <h1>Messages</h1>
                {chats.map(values => {
                    return (
                        <div>
                            <button onClick={() => router.push(`/friend/${values.id}`)}>{values.name}</button>
                        </div>
                    )
                })}
            </div>
    )
}