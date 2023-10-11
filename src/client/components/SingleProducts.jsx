import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useEffect, useState } from "react"
import { fetchSingleProduct } from "../api/ajaxhelper";
import { useParams } from "react-router-dom"


const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default function SingleProduct(){
    const[product,setProduct]=useState([])
    const {id} = useParams
 
   
    function renderSingleProduct(){
            return (
                <div className="SingleProduct" key={product.id}>
                    <h4>{product.title}</h4>
                    <h4>{product.brand}</h4>
                    <h4>{product.price}</h4>
                    <h4>{product.size}</h4>
                    <h4>{product.color}</h4>
                    <h4>{product.description}</h4>
                    <img className="imgage" src={product.img} alt="img"/>
                </div>
            )
        }

    useEffect(()=>{
        async function SingleProductHandler(){
            const result = await fetchSingleProduct(id)
            setProduct(result)

        }
      SingleProductHandler()

    },[]
    )
    
    return (
        <div>
        {renderSingleProduct()}
   </div>
    )
    }