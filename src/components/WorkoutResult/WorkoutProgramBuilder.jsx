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
	background-color: ${styles.primaryColor};
	padding: ${styles.inputPadding};
	padding-left: 1rem;
	padding-right: 1rem;
	border-radius: ${styles.inputBorderRadius};
	border: ${styles.inputBorder};
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1
  }
  50% {
    opacity: 0
  }
`;

function WorkoutProgramBuilder({ workoutData }) {
	if (workoutData) {
		try {
			const parsedData = JSON.parse(workoutData);
			// log object
			console.log(parsedData);
			// Render one UI element per workout day
			return (
				<>
					{Object.entries(parsedData).map(([day, exercises], index) => (
						<DailyTable
							key={index}
							dayName={day}
							exercisesObject={exercises}
						/>
					))}
				</>
			);
		} catch (error) {
			console.error('Error parsing JSON:', error);
			return (
				<>
					<Paragraph
						css={css`
							margin: 10% auto;
						`}>
						Error loading workout data. Please try again. 😞
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
						animation: ${pulse} 4s infinite;
					`}>
					Please submit to see the result
				</Paragraph>
			</>
		);
	}
}

export default WorkoutProgramBuilder;
