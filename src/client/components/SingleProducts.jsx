import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/ajaxhelper";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const ProductWrapper = styled.div`
    background: #fff;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 60%;
    text-align: center;
    box-sizing: border-box;
`;

const ProductImage = styled.img`
    max-width: 100%;
    display: block;
    margin: 0 auto 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductDetail = styled.h4`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
`;

const ProductBrand = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color:#FFB6C1; /* Dark gray text color */
    margin-bottom: 5px;
`;

const ProductSize = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: #FFB6C1; /* Dark gray text color */
    margin-bottom: 5px;
`;

const ProductPrice = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    color: #FFB6C1; /* Baby pink text color */
    margin-bottom: 15px;
`;

const ProductDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333; /* Dark gray text color */
`;

export default function SingleProduct({token,role}) {
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
        <div>
            <Navbar token={token} role={role}/>
            <Container>
                <ProductWrapper>
                    <ProductImage src={product.img} alt="img" />
                    <ProductDetail>{product.title}</ProductDetail>
                    <ProductBrand>Brand: {product.brand}</ProductBrand>
                    <ProductSize>Size: {product.size}</ProductSize>
                    <ProductPrice>Price: ${product.price}</ProductPrice>
                    <ProductDescription>{product.description}</ProductDescription>
                </ProductWrapper>
            </Container>
        </div>
    );
}
