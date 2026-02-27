import { useState, useEffect } from "react";
import "./form.css"

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
        document.location.reload();
}

    return(
        <>
        <h1>Please fill out the form</h1>
        <div className="form">
        <input type="text" placeholder="Insert a title" onChange={(event) => setTitle(event.target.value)}/>
        <input type="text" placeholder="Insert description" onChange={(event) => setDesc(event.target.value)}/>
        <input type="text" placeholder="Insert image link" onChange={(event) => setImage(event.target.value)}/>
        <button onClick={post}>Submit</button>
        </div>

        <div>
            {data.map((info)=> (
                <div className="item">                
                    <h2>{info.name}</h2>
                    <img src={info.image} width="300" height="300"></img>
                    <p>{info.email}</p>
                    <button onClick={(e)=> {
                        const response = fetch("https://users-api-sable.vercel.app/api/users/" + info.id, {
                            method:"DELETE"})
                            .then((res)=>{
                                if(!res.ok){
                                    throw new Error ("something went wrong x_x")
                                }
                                    document.location.reload();
                            })
                    }}>delete</button>
                </div>
            ))}
        </div>
        </>
    )
}