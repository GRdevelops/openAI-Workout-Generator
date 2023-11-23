import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import logo from '../assets/Logo.svg';
import AuthenticationButton from './Header/AuthenticationButton.jsx';

// Styles
import styles from '../styles/theme.js';

const Container = styled.div`
	position: relative;
	padding: 1rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: ${styles.containerWidth};
	border-bottom: 1px solid #777;
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
