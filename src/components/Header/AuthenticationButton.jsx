import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { motion } from 'framer-motion';

// Components
import ProfileInfo from './ProfileInfo.jsx';
import ProfileImage from './ProfileImage.jsx';

// Utils
import useOutsideClick from '../../utils/useOutsideClicks.js';

// Styles
import styles from '../../styles/theme.js';
	
const ProfileCard = styled(motion.div)`
	max-width: 400px;
	color: #111;
	font-size: ${styles.fontSize};
	position: absolute;
	margin-top: .8rem;
	right: 0;
	background-color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-radius: ${styles.inputBorderRadius};
	word-break: break-word;

	&::before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 55px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white; 
  }
`;

const Description = styled.p`
	opacity: 0.9;
	font-size: calc(${styles.fontSize} - 10%);
	margin-bottom: .3rem;
`;
	
const pulse = keyframes`
  0%, 100% {
		opacity: 0;
  }
  50% {
		opacity: 1;
  }
`;
	
const cardVariants = {
		hidden: {
			opacity: 0,
			scale: 0,
			y: '-50%',
			x: '30%',
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: '0%',
			x: '0%',
		},
};

const AuthenticationButton = ({ userDescription }) => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const [ isProfileOpen, setIsProfileOpen ] = useState(false);

	return isAuthenticated ? (
		<div>
			<ProfileImage onClick={() => setIsProfileOpen(prev => !prev)} />
			{isProfileOpen && (
				<ProfileCard
					variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
					transition={{ duration: 0.1, ease: "linear" }}
					>
					<ProfileInfo />
					{userDescription
					? <Description>{userDescription}</Description>
					: <Description css={css`
						animation: ${pulse} 2s infinite;
						`}>Submit to see user description</Description>}
					<button 
						onClick={() => logout({ returnTo: window.location.origin, client_id: 'tVVFU2JrlX765GPVnj1JITZPSGONoL2d' })}>
						Log Out
					</button>
				</ProfileCard>
			)}
		</div>
	) : (
		<button onClick={() => loginWithRedirect()}>Log In</button>
	);
};

export default AuthenticationButton;
