import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/Logo.svg';

// Components
import AuthenticationButton from './Header/AuthenticationButton.jsx';

// Styles
import styles from '../styles/theme.js';

const Container = styled.div`
	position: relative;
	margin-top: 1rem;
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: ${styles.containerWidth};
	background-color: ${styles.primaryColor};
	border-radius: ${styles.containerBorderRadius};
	border: ${styles.inputBorder};
`;

const Logo = styled.a`
	float: left;
`;

const Image = styled.img`
	max-height: 40px;
	vertical-align: middle;
`;

const Header = ({ userDescription }) => {
	const homepageLink = 'https://open-ai-workout-generator.vercel.app/';

	return (
		<Container>
			<Logo href={homepageLink}>
				<Image src={logo} />
			</Logo>
			<AuthenticationButton userDescription={userDescription} />
		</Container>
	);
};

export default Header;
