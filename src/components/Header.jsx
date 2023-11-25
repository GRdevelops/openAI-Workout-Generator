import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import logo from '../assets/Logo.svg';
import AuthenticationButton from './Header/AuthenticationButton.jsx';

// Styles
import styles from '../styles/theme.js';

const Container = styled.div`
	position: relative;
	margin-top: 1rem;
	padding: 2rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: ${styles.containerWidth};
	background-color: ${styles.primaryColor};
	border-radius: ${styles.containerBorderRadius}
`;

const Logo = styled.img`
	max-height: 40px;
	float: left;
`;

const Header = ({ userDescription }) => {

	return (
		<Container>
			<Logo src={logo} />
			<AuthenticationButton userDescription={userDescription} />
		</Container>
	);
};

export default Header;
