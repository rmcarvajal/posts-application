import { useState, useEffect } from "react";


export const Form = () => {
const [data,setData] = useState([])

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


    return(
        <>
        <h1>Please fill out the form</h1>
        <input type="text" placeholder="Insert a title"/>
        <input type="text" placeholder="Insert description"/>
        <input type="text" placeholder="Insert image link"/>
        <button >Submit</button>
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