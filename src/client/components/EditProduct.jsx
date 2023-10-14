import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function EditPost({token,role}){
    const{id}=useParams()
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[price, setPrice]=useState("");
    const[img,setImg] =useState("");
    const[brand,setBrand]= useState("");
    const[quantity,setQuantity]=useState("");
    const[color,setColor]=useState("");
    const[size,setSize] =useState("");

 const handleSubmit = (event) => {
      event.preventDefault();
     fetch(`http://localhost:3000/api/products/${id}`, 
          { 
            method: 'PATCH', 
            headers: { 
              "Content-Type": "application/json" ,
              'Authorization': `Bearer ${token}`
            }, 
            body: JSON.stringify({
                
                title: title,
                img: img,
                brand:brand,
                quantity:quantity,
                color:color,
                size:size,
                description: description,
                price:price,
            }
            )
          })
          .then((resp)=>resp.json())
          .then((question)=>console.log(question))
          alert(resq.message)
      }
    return (
        <>
        <div className="EditPost">
        <h2> Edit Product</h2>
        <form onSubmit={handleSubmit}>
        <label>
                Title:{" "}
                <input 
                value={title} onChange={e=>setTitle(e.target.value)}
                />
            </label><br/>
            <label>
                ImgUrl:{" "}
                <input 
                value={img} onChange={e=>setTitle(e.target.value)}
                />
            </label><br/>
            <label>
                Description:{" "}
                <input 
                value={description} onChange={e=>setDescription(e.target.value)}
                />
            </label><br/>
            <label>
                Price:{" "}
                <input 
                value={price} onChange={e=>setPrice(e.target.value)}
                />
            </label><br/>
            <button className="button" >Submit</button>
        </form>
        </div>
        </>)
    
    }