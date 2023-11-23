import PulseLoader from 'react-spinners/PulseLoader';

// Components
import WorkoutProgram from './WorkoutResult/WorkoutProgram';

// Styles
import styled from '@emotion/styled';

const H2 = styled.h2`
	font-size: 2rem;
	font-weight: 500;
	margin-top: 6rem;
	margin-bottom: 1rem;
	text-align: center;
`;

const Output = styled.div`
	margin: 0 auto;
	margin-bottom: 4rem;
	display: flex;
	flex-direction: column;
`;

function WorkoutResult({ isLoading, workoutData }) {
	return (
		<>
			<H2>Your workout:</H2>

			<Output>
				{isLoading ? (
					<PulseLoader
						color='#8378ff'
						cssOverride={{
							margin: '10% auto',
							display: 'flex',
							justifyContent: 'center',
						}}
						speedMultiplier={0.7}
					/>
				) : (
					<WorkoutProgram workoutData={workoutData} />
				)}
			</Output>
		</>
	);
}

export default WorkoutResult;
