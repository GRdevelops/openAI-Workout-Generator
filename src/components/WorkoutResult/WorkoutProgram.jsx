import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import styles from '../../styles/theme.js';

// Components
import DailyTable from './WorkoutProgram/DailyTable.jsx';

// Styles
const Paragraph = styled.p`
	display: inline-block;
	max-width: 50ch;
	margin: 0 auto;
	line-height: 1.5;
	text-align: center;
	background-color: ${styles.inputBackgroundColor};
	padding: ${styles.inputPadding};
  padding-left: 1rem;
  padding-right: 1rem;
	border-radius: ${styles.inputBorderRadius};
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1
  }
  50% {
    opacity: 0
  }
`;

function WorkoutProgram({ workoutData }) {

	// Test data
	// workoutData = `{
  //   "Monday": {
  //     "type": "Full Body",
  //     "exercises": {
  //       "Squats": "3 x 10",
  //       "Push-ups": "3 x max",
  //       "Bent-over Rows": "3 x 10",
  //       "Plank": "3 x 30 seconds"
  //     }
  //   },
  //   "Wednesday": {
  //     "type": "Upper Body",
  //     "exercises": {
  //       "Bench Press": "3 x 10",
  //       "Pull-ups": "3 x max",
  //       "Shoulder Press": "3 x 10",
  //       "Bicep Curls": "3 x 12",
  //       "Tricep Dips": "3 x max"
  //     }
  //   },
  //   "Friday": {
  //     "type": "Lower Body",
  //     "exercises": {
  //       "Deadlifts": "3 x 10",
  //       "Lunges": "3 x 10 each leg",
  //       "Calf Raises": "3 x 15",
  //       "Leg Raises": "3 x 12"
  //     }
  //   }
  // }`;

	if (workoutData) {
		try {
			const parsedData = JSON.parse(workoutData);

			// Test
			console.log(parsedData)

			// Render one UI element per workout day
			const renderedDays = Object.keys(parsedData).map((day, index) => (
				<DailyTable
					key={index}
					dayName={day}
					dayObject={parsedData[day]}
				/>
			));

			return <>{renderedDays}</>;
		} catch (error) {
			console.error('Error parsing JSON:', error);
			return (
				<>
					<Paragraph
						css={css`
							margin: 10% auto;
						`}>
						Error loading workout data. Invalid format. 😞
					</Paragraph>
				</>
			);
		}
	} else {
		return (
			<>
				<Paragraph
					css={css`
						margin: 10% auto;
						animation: ${pulse} 2s infinite;
					`}>
					Please submit to see the result
				</Paragraph>
			</>
		);
	}
}

export default WorkoutProgram;
