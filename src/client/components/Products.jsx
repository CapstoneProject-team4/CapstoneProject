import React, { useState } from 'react';
import styled from "styled-components";
import Product from './Product';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { popularProducts } from '../data';
import SliderControls from './SliderControls';

const Container = styled.div`
    padding: 20px;
    background-color: #F7F7F7;
`;

const SliderContainer = styled(Slider)`
    width: 100%;
    margin: 0 auto;
`;

const Products = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: (index) => setCurrentSlide(index)
    };

    let slider;

    const nextSlide = () => {
        slider.slickNext();
    }

    const prevSlide = () => {
        slider.slickPrev();
    }

    return (
        <Container>
            <SliderControls 
                onNext={nextSlide} 
                onPrev={prevSlide} 
                currentSlide={currentSlide} 
                totalSlides={popularProducts.length} 
            />
            <SliderContainer {...settings} ref={c => (slider = c)}>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </SliderContainer>
        </Container>
    );
}

export default Products;

