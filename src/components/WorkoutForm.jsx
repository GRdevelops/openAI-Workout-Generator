import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import RadioButton from './WorkoutForm/RadioButton.jsx';
import MultiSelection from './WorkoutForm/MultiSelection.jsx';
import Slider from './WorkoutForm/Slider';
import { Bodyweight, Selection, TextArea } from './WorkoutForm/OtherInputs.jsx';

// Styles
import styles from '../styles/theme.js';

const Form = styled.form`
	font-size: ${styles.fontSize};
	margin: 0 auto;
	max-width: ${styles.formWidth};
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: .8rem;
	margin-left: .3rem;
`;

const Button = styled.button`
	margin-top: 1rem;
`;

export const Wrapper = styled.div`
	background-color: ${styles.primaryColor};
	padding: ${styles.wrapperPadding};
	display: flex;
	flex-direction: column;
	border-radius: ${styles.wrapperBorderRadius};
	margin-bottom: ${styles.verticalSpace};
	border: ${styles.inputBorder};
`;

// Component
function WorkoutForm({ userData, setUserData, onSubmit, isLoading }) {
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

	const fitnessLevels = ['Beginner', 'Intermediate', 'Advanced'];

	const goals = ['Gain Muscle', 'Get Leaner', 'Boost Strength', 'Stay Fit', 'Enhance Stamina']



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

			<Bodyweight
				userData={userData}
				setUserData={setUserData}
			/>

			<Selection
				label='Fitness Level:'
				statePropertyToChange='fitnessLevel'
				populateWith={fitnessLevels}
				userData={userData}
				setUserData={setUserData}
			/>

			<Selection
				label='Goal:'
				statePropertyToChange='goal'
				populateWith={goals}
				userData={userData}
				setUserData={setUserData}
			/>

			<MultiSelection
				label='Select Equipment:'
				populateWith={equipmentChoices}
				statePropertyToChange={'equipment'}
				userData={userData}
				setUserData={setUserData}
			/>

			<Slider
				label='How many days can you workout per week?'
				min={1}
				max={7}
				userData={userData}
				setUserData={setUserData}
			/>

			<TextArea label='Injuries:' placeholder='Knee injury' statePropertyToChange='injuries' userData={userData} setUserData={setUserData} optional/>

			<TextArea label='Preferencies:' placeholder='Arms preference, I train in cycles' statePropertyToChange='preferencies' userData={userData} setUserData={setUserData} optional/>

			{/* Avoids multiple api calls in a row */}
			<Button type='submit' disabled={isLoading} css={css` position: sticky; bottom: 1rem`}>Submit</Button>

		</Form>
	);
}

export default WorkoutForm;
