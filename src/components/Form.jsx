import { useState, useEffect } from "react";


export const Form = () => {
const [data,setData] = useState([])
const [title,setTitle] = useState("")
const [desc, setDesc] = useState("")
const [image, setImage] = useState("")

    useEffect(() => {
    const getAPI = async () => {
        try {
            const response = await fetch("https://users-api-sable.vercel.app/api/users")
            .then((res) => res.json()
        .then((users) => setData(users)))
        } catch (error){
            console.log(error)
        }
    }; getAPI()
},[])

const post = async () => {
    try{
            const response = await fetch("https://users-api-sable.vercel.app/api/users",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        name: title,
                        email: desc,
                        image: image
                    }
                )
            })
    } catch (error){
        console.log(error)
    }
}

    return(
        <>
        <h1>Please fill out the form</h1>
        <input type="text" placeholder="Insert a title" onChange={(event) => setTitle(event.target.value)}/>
        <input type="text" placeholder="Insert description" onChange={(event) => setDesc(event.target.value)}/>
        <input type="text" placeholder="Insert image link" onChange={(event) => setImage(event.target.value)}/>
        <button onClick={post}>Submit</button>
        <div>
            {data.map((info)=> (
                <div>                
                    <h2>{info.name}</h2>
                    <img src={info.image} width="300" height="300"></img>
                    
                </div>
            ))}
        </div>
        </>
    )
}