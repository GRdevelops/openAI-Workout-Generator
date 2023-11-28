import styled from '@emotion/styled';
import styles from '../../../styles/theme.js';

const Table = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	row-gap: 1.2rem;
	font-size: ${styles.fontSize};
	width: 100%;
	max-width: ${styles.formWidth};
	margin: 2rem auto;
	background-color: ${styles.secondaryColor};
	border-radius: 2rem;
	padding: 1.5rem;
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: .5rem;
	justify-content: space-between;
	align-items: center;
	word-break: normal;
`;

const StaticInfo = styled.span`
	font-size: calc(${styles.fontSize} - 10%);
	color: #ccc;
`;

const Line = styled.div`
	height: 1px;
	background-color: ${styles.white};
`;

const Day = styled.h4`
	font-size: calc(${styles.fontSize} + 10%);
	font-weight: 700;
	margin: 0;
`;

const Exercise = styled.a`
	text-decoration: 'none';
	color: ${styles.white};
	transition: all 150ms ease-out;

	&:hover {
		text-decoration: 'underline';
		color: #ccc;
	}
`;

function DayTable({ dayName, exercisesOfTheDay }) {
	const exercises = Object.entries(exercisesOfTheDay.exercises).map(([exerciseName, details], index) => {
		const dynamicYoutubeLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(exerciseName)}`;

		return (
			<Row key={index}>
				<Exercise
					href={dynamicYoutubeLink}
					target='_blank'
					rel='noopener noreferrer'
					title='Search on Youtube'>
					{exerciseName}
				</Exercise>
				<span>{details}</span>
			</Row>
		);
	});

	return (
		<Table>
			<Row>
				<Day>{dayName}</Day>
				<StaticInfo>{exercisesOfTheDay.type}</StaticInfo>
			</Row>
			<Line></Line>
			<Row>
				<StaticInfo>Exercise</StaticInfo>
				<StaticInfo>Sets x Reps</StaticInfo>
			</Row>
			{exercises}
		</Table>
	);
}

export default DayTable;
