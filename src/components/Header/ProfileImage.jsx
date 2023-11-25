import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

// Styles
import styles from '../../styles/theme.js';

const Image = styled(motion.img)`
	max-height: 55px;
	border-radius: 50%;
	cursor: pointer;
	border: ${styles.inputBorder};
	position: relative;
	top: 3px;
`;

const ProfileImage = ({ onClick }) => {
  const { user } = useAuth0();

  return (
    <Image
			onClick={onClick}
      src={user.picture}
      alt={user.name}
      whileHover={{ scale: 1.05 }}
      
    />
  )
}

export default ProfileImage;