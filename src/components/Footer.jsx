import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Styles
import styles from '../styles/theme.js';

const Container = styled.div`
	position: relative;
	margin: 1rem auto;
	padding: 2rem 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	max-width: ${styles.containerWidth};
	background-color: ${styles.primaryColor};
	border-radius: ${styles.containerBorderRadius};
	border: ${styles.inputBorder};
`;

const Footer = ({ userData }) => {
	const motivationalPhrases = {
		'Get Leaner': 'find joy in every step towards a leaner, healthier you.',
		'Boost Strength': 'feel empowered with every new level of strength you achieve.',
		'Gain Muscle': 'relish the journey as your muscles grow and your physique transforms.',
		'Stay Fit': 'continue to take pride in maintaining your fitness and well-being.',
		'Enhance Stamina': 'discover new strengths as you push your endurance further.',
	};

	return (
		<Container>
			<blockquote
				css={css`
					border-left: 5px solid #42489e;
					padding-left: 0.7rem;
				`}>
				Hope you {motivationalPhrases[userData.goal]}
			</blockquote>
			<div
				css={css`
					display: flex;
					justify-content: flex-end;
					flex-grow: 1;
					gap: 1rem;
					color: white;
				`}>
				<a href='https://github.com/GRdevelops/openAI-Workout-Generator.git' target='_blank'>GitHub</a>
				<a href='https://www.desengineers.co/' target='_blank'>Portfolio</a>
			</div>
		</Container>
	);
};

export default Footer;
