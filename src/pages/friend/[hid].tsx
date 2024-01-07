import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Friends() {

    interface Msg {
        msg: string;
        img: string;
        name: string;
        id: string;
    }

    const uid = "1"
    const params = useParams()
    const router = useRouter();
    const [msg, setMsg] = useState<string>("")
    const [msgs, setMsgs] = useState<Msg[]>([{
        msg: "Hello",
        img: "image.png",
        name: "Robin",
        id: "1"
    
    }, {
        msg: "Hi",
        img: "image.png",
        name: "Batman",
        id: "2"
    }])
    
    // useEffect(() => {
    //     fetch(`/get_imsg?uid_o=${}&uid_t=${}`)
    //         .then(data => data.json())
    //         .then(data => setMsgs(data.msg))
    // }, [])

    function handleSubmit() {
        // fetch(`/send_imsg`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         uid_o: uid,
        //         uid_t: params!["hid"],
        //         msg: msg,
        //         img: "image.png",
        //         name: "Bob"
        //     })
        // })
        setMsgs(prev => [...prev, {
            msg: msg,
            img: "image.png",
            name: "Bob",
            id: "1"
        }])
    }

    return (
        <div>
            <h1>Friend: </h1>
            <div>
                {msgs.map(values => {
                    if(values.id === uid) {
                        return (
                            <div style={{ marginRight: "auto"}}>
                                <img src={values.img} alt={values.name} />
                                <h3>{values.name}</h3>
                                <p>{values.msg}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div style={{ marginLeft: "auto"}}>
                                <img src={values.img} alt={values.name} />
                                <h3>{values.name}</h3>
                                <p>{values.msg}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div>
                <input type="text" onChange={e => setMsg(e.target.value)} value={msg}  />
                <button onClick={handleSubmit}>
                    Send
                </button>
            </div>
        </div>
    )
}