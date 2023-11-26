import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Label, Wrapper } from '../WorkoutForm.jsx';

const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	margin: .5rem auto;

	&:hover .tooltip {
		display: block;
	}
`;

const SliderInput = styled.input`
	-webkit-appearance: none;
	width: 100%;
	height: 6px;
	background: #aaa;
	outline: none;
	border-radius: 0.3rem;
	opacity: 0.7;
	transition: opacity 0.2s;

	&:hover {
		opacity: 1;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 24px;
		height: 24px;
		background: #3a86ff;
		cursor: pointer;
		border-radius: 50%;
		transform: translateY(-5%);
	}

	&::-moz-range-thumb {
		width: 25px;
		height: 25px;
		background: #4caf50;
		cursor: pointer;
		border-radius: 50%;
	}
`;

const SliderTooltip = styled.div`
	display: none;
	position: absolute;
	background: #333;
	color: white;
	text-align: center;
	border-radius: 12px;
	padding: 7px 14px;
	bottom: 105%;
	left: ${props => `calc(${((props.value - props.min) / (props.max - props.min)) * 95}% - 5%)`};
	transform: translateX(30%);
	white-space: nowrap;
`;

const Slider = ({ label, min, max, userData, setUserData }) => {
  const [showTooltip, setShowTooltip] = useState(false);

	const handleSliderChange = event => {
		setUserData({ ...userData, daysPerWeek: event.target.value });
	};

  const handleTouchStart = () => {
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    setShowTooltip(false);
  };

	const tooltipStyle = showTooltip ? { display: 'block' } : {};

  return (
    <>
      <Wrapper>
        <Label>{label}</Label>
        <SliderContainer>
          <SliderTooltip
            className='tooltip'
            value={userData.daysPerWeek}
            min={min}
            max={max}
						style={tooltipStyle}>
            {userData.daysPerWeek}
          </SliderTooltip>
          <SliderInput
            type='range'
            min={min}
            max={max}
            value={userData.daysPerWeek}
            onChange={handleSliderChange}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
        </SliderContainer>
      </Wrapper>
    </>
  );
};

export default Slider;
