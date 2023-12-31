import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import RadioButton from './WorkoutForm/RadioButton.jsx';
import MultiSelection from './WorkoutForm/MultiSelection.jsx';
import Slider from './WorkoutForm/Slider';
import { Number, Selection, TextArea } from './WorkoutForm/OtherInputs.jsx';

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
function WorkoutForm({ userData, setUserData, handleData, isLoading }) {
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
	const goals = ['Gain Muscle', 'Get Leaner', 'Boost Strength', 'Stay Fit', 'Enhance Stamina'];

	const handleSubmit = event => {
		event.preventDefault();
		console.log('Submitted:', userData);
		handleData(userData);
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

			<Number
				label='Bodyweight:'
				statePropertyToChange='bodyweight'
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

			{/* Limit characters count to keep costs under control */}
			<TextArea label='Injuries:' placeholder='Knee injury' statePropertyToChange='injuries' userData={userData} setUserData={setUserData} maxLength={100} optional/>
			{/* Limit characters count to keep costs under control */}
			<TextArea label='Preferences:' placeholder='Total body, A/B split, HIT, Arms and Chest preference' statePropertyToChange='preferences' userData={userData} maxLength={100} setUserData={setUserData} optional/>

			{/* "disable" avoids sending multiple api calls in a row */}
			<Button type='submit' disabled={isLoading} css={css` position: sticky; bottom: 1rem`}>Submit</Button>

		</Form>
	);
}

export default WorkoutForm;
