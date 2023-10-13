import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/ajaxhelper";
import { useParams } from "react-router-dom";
import "./SingleProduct.css"; 

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function SingleProductHandler() {
            const result = await fetchSingleProduct(id);
            setProduct(result);
        }
        SingleProductHandler();
    }, [id]);

    return (
        <div className="Container">
            <div className="ProductWrapper" key={product.id}>
                <h4>{product.title}</h4>
                <h4>{product.brand}</h4>
                <h4>{product.price}</h4>
                <h4>{product.size}</h4>
                <h4>{product.color}</h4>
                <h4>{product.description}</h4>
                <img className="image" src={product.img} alt="img" />
            </div>
        </div>
    );
}
