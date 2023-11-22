import styled from '@emotion/styled';
import styles from '../../styles/theme.js';

const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: ${styles.verticalSpace};

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
		width: 22px;
		height: 22px;
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
	border-radius: 6px;
	padding: 4px 8px;
	bottom: 110%;
	left: ${props => `calc(${((props.value - props.min) / (props.max - props.min)) * 95}% - 5%)`};
	transform: translateX(80%);
	white-space: nowrap;
`;

const Slider = ({ min, max, value, onChange }) => {
	return (
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
	);
};

export default Slider;
