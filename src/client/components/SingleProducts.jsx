import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api/ajaxhelper";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const ProductWrapper = styled.div`
    border: 1px solid #ffb6c1;
    padding: 30px;
    width: 60%;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    box-sizing: border-box;
`;

const ProductImage = styled.img`
    max-width: 100%;
    display: block;
    margin: 0 auto 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductDetail = styled.h4`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ff1493;
`;

const ProductDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #ff69b4;
`;

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
        <div>
            <Navbar />
            <Container>
                <ProductWrapper>
                    <ProductDetail>{product.title}</ProductDetail>
                    <ProductDetail>{product.brand}</ProductDetail>
                    <ProductDetail>{product.price}</ProductDetail>
                    <ProductDetail>{product.size}</ProductDetail>
                    <ProductDetail>{product.color}</ProductDetail>
                    <ProductDescription>{product.description}</ProductDescription>
                    <ProductImage src={product.img} alt="img" />
                </ProductWrapper>
            </Container>
        </div>
    );
}
