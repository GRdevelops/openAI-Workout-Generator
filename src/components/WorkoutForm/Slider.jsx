import styled from '@emotion/styled';
import styles from '../../styles/theme.js';
import { Label } from '../WorkoutForm.jsx'
import { Wrapper } from '../WorkoutForm.jsx';

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
		width: 28px;
		height: 28px;
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
	padding: 8px 16px;
	bottom: 100%;
	left: ${props => `calc(${((props.value - props.min) / (props.max - props.min)) * 95}% - 5%)`};
	transform: translateX(30%);
	white-space: nowrap;
`;

const Slider = ({ label, min, max, value, onChange }) => {
	return (
		<>
			<Wrapper>
				<Label>{label}</Label>
				<SliderContainer>
					<SliderTooltip
						className='tooltip'
						value={value}
						min={min}
						max={max}>
						{value}
					</SliderTooltip>
					<SliderInput
						type='range'
						min={min}
						max={max}
						value={value}
						onChange={onChange}
					/>
				</SliderContainer>
			</Wrapper>
		</>
	);
};

export default Slider;
