import React from 'react';
import styled from "styled-components";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
`;

const ControlIcon = styled.div`
  font-size: 1rem; /* Adjusted font size */
  color: #FFC0CB;
  cursor: pointer;
  transition: color 0.3s;
  padding: 10px;
  border-radius: 50%;
`;

const LeftArrow = styled(ControlIcon)`
  position: absolute;
  left: 0;
`;

const RightArrow = styled(ControlIcon)`
  position: absolute;
  right: 0;
`;

const SlideTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SlideText = styled.span`
  font-size: 1.2rem;
  color: black;
  margin-right: 10px;
`;

const NewArrivalsText = styled.span`
  font-size: 1.2rem;
  color: #FFC0CB;
`;

const SliderControls = ({ onNext, onPrev, currentSlide, totalSlides }) => {
  return (
    <ControlsContainer>
      <LeftArrow onClick={onPrev}>
        <KeyboardArrowLeft />
      </LeftArrow>
      <SlideTextContainer>
        <SlideText>Slide {currentSlide + 1} of {totalSlides}</SlideText>
        <NewArrivalsText>All New Arrivals</NewArrivalsText>
      </SlideTextContainer>
      <RightArrow onClick={onNext}>
        <KeyboardArrowRight />
      </RightArrow>
    </ControlsContainer>
  );
}

export default SliderControls;
