import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import RadioButton from './WorkoutForm/RadioButton.jsx';
import MultiSelection from './WorkoutForm/MultiSelection.jsx';
import Slider from './WorkoutForm/Slider';

// Styles
import styles from '../styles/theme.js';

const customScrollbar = css`
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: ${styles.inputBackgroundColor};
	}

	&::-webkit-scrollbar-thumb {
		background-color: #666;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #aaa;
	}

	&::-webkit-scrollbar-corner {
		background-color: ${styles.inputBackgroundColor};
	}

	&::-webkit-resizer {
		background-color: ${styles.inputBackgroundColor};
	}
`;

const Form = styled.form`
	font-size: ${styles.fontSize};
	margin: 0 auto;
	max-width: ${styles.formWidth};
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
	font-family: ${styles.fontFamily};
	font-size: ${styles.inputFontSize};
	margin-bottom: ${styles.verticalSpace};
	padding: ${styles.inputPadding};
	min-height: 7rem;
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};

	&::placeholder {
		vertical-align: top;
		text-align: start;
	}

	${customScrollbar};
`;

const Input = styled.input`
	font-family: ${styles.fontFamily};
	font-size: ${styles.inputFontSize};
	margin-bottom: ${styles.verticalSpace};
	padding: ${styles.inputPadding};
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};
`;

const Select = styled.select`
	font-family: ${styles.fontFamily};
	font-size: ${styles.inputFontSize};
	margin-bottom: ${styles.verticalSpace};
	padding: ${styles.inputPadding};
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};
`;

const Button = styled.button`
	margin-top: 1rem;
`;

// Component
function WorkoutForm({ onSubmit }) {
	const [userData, setUserData] = useState({
		gender: 'Male',
		weight: 70,
		weightUnit: 'kg',
		fitnessLevel: 'beginner',
		equipment: ['All'],
		daysPerWeek: 3,
		goal: 'build-muscle',
		injuries: '',
		preferencies: '',
	});

	const equipmentChoices = [
		'All',
		'None',
		'Ab Roller',
		'Barbell',
		'Battle Ropes',
		'Bench',
		'Box',
		'Cable',
		'Dumbbell',
		'Elliptical',
		'Exercise Ball',
		'Ez Bar',
		'Kettlebell',
		'Long Bar',
		'Machine',
		'Medicine Ball',
		'Plate',
		'Pull Up Bar',
		'Resistance Band',
		'Smith Machine',
		'Stairmaster',
		'Stationary Bike',
		'Treadmill',
		'TRX',
		'Trap Bar',
		'Weight Sled',
		'Yoga Mat',
	];

	const handleSliderChange = event => {
		setUserData({ ...userData, daysPerWeek: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log('Submitted:', userData);
		onSubmit(userData);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<RadioButton
				label={'Gender'}
				optionLeft={'Male'}
				optionRight={'Female'}
				statePropertyToChange={'gender'}
				userData={userData}
				setUserData={setUserData}
			/>

			<RadioButton
				label={'Unit'}
				optionLeft={'kg'}
				optionRight={'lbs'}
				statePropertyToChange={'weightUnit'}
				userData={userData}
				setUserData={setUserData}
			/>

			<Label htmlFor='bodyweight'>Bodyweight:</Label>
			<Input
				id='bodyweight'
				type='number'
				value={userData.weight}
				onChange={e => setUserData({ ...userData, weight: e.target.value })}
			/>

			<Label htmlFor='fitness-level'>Fitness Level:</Label>
			<Select
				id='fitness-level'
				name='fitness-level'
				onChange={e => setUserData({ ...userData, fitnessLevel: e.target.value })}>
				<option value='beginner'>Beginner</option>
				<option value='intermediate'>Intermediate</option>
				<option value='advanced'>Advanced</option>
			</Select>

			<Label htmlFor='fitness-goal'>Goal:</Label>
			<Select
				id='fitness-goal'
				name='fitness-goal'
				onChange={e => setUserData({ ...userData, goal: e.target.value })}>
				<option value='build-muscle'>Gain Muscle</option>
				<option value='lose-fat'>Get Leaner</option>
				<option value='increase-strength'>Boost Strength</option>
				<option value='maintenance'>Stay Fit</option>
				<option value='improve-endurance'>Enhance Stamina</option>
			</Select>

			<Label>Select Equipment:</Label>

			<MultiSelection
				choices={equipmentChoices}
				statePropertyToChange={'equipment'}
				userData={userData}
				setUserData={setUserData}
			/>

			<Label>How many days can you workout per week?</Label>
			<Slider
				min={1}
				max={7}
				value={userData.daysPerWeek}
				onChange={handleSliderChange}
			/>

			<Label>
				Injuries:{' '}
				<span
					css={css`
						opacity: 0.5;
					`}>
					(optional)
				</span>
			</Label>
			<TextArea
				id='injuries'
				name='injuries'
				placeholder='Knee injury'
				value={userData.injuries}
				onChange={e => setUserData({ ...userData, injuries: e.target.value })}
			/>
			<Label>
				Preferences:{' '}
				<span
					css={css`
						opacity: 0.5;
					`}>
					(optional)
				</span>
			</Label>
			<TextArea
				id='preferencies'
				name='preferencies'
				placeholder='Arms preference, I train in cycles'
				value={userData.preferencies}
				onChange={e => setUserData({ ...userData, preferencies: e.target.value })}
			/>
			<Button type='submit'>Submit</Button>
		</Form>
	);
}

export default WorkoutForm;
