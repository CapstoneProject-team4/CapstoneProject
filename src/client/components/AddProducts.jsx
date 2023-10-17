import { useState } from "react";
import "./AddProducts.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
export default function AddProducts({token,role}){
    const navigate = useNavigate();
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[price, setPrice]=useState("");
    const[img,setImg] =useState("");
    const[brand,setBrand]= useState("");
    const[quantity,setQuantity]=useState("");
    const[color,setColor]=useState("");
    const[size,setSize] =useState("");
    const[category,setCategory] = useState("")
 const handleSubmit = async(event) => {
      event.preventDefault();
     try{ const response = await fetch(`http://localhost:3000/api/products`, 
          { 
            method: 'POST', 
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
                categories_id :category,
            }
            )
          })
          const result = await response.json();
          if(result.title=title){
            alert("Successfully created !")
            navigate('/products')
          } else{
            alert("Error! Please check your value!")
          }
         
          return result;
        } catch(error){
            console.log(error)
        }
         // .then((resp)=>resp.json())
        //  .then((question)=>console.log(question))
         
          
      }
    return (
        <>
        <Navbar token={token} role={role} />
        <div className="AddProducts">
        <h2> Add Products</h2>
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
                value={img} onChange={e=>setImg(e.target.value)}
                />
            </label><br/>
            <label>
                Brand:{" "}
                <input 
                value={brand} onChange={e=>setBrand(e.target.value)}
                />
            </label><br/>
            <label>
                Quantity:{" "}
                <input 
                value={quantity} onChange={e=>setQuantity(e.target.value)}
                />
            </label><br/>
            <label>
                Color:{" "}
                <input 
                value={color} onChange={e=>setColor(e.target.value)}
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
            <label>
                Size:{" "}
                <input 
                value={size} onChange={e=>setSize(e.target.value)}
                />
            </label><br/>
            <label>
                Category Id:{" "}
                <input 
                value={category} onChange={e=>setCategory(e.target.value)}
                />
            </label><br/>
            <button className="button" type="submit"  >Submit</button>
        </form>
        </div>
        </>)
    
    }