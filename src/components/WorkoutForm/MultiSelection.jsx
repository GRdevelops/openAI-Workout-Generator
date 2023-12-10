import { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import checkmark from '../../assets/checkmark.svg';
import { motion } from 'framer-motion';

// Custom Hook
import useOutsideClick from '../../utils/useOutsideClicks.js';

// Styles
import styles from '../../styles/theme.js';
import { Label } from '../WorkoutForm.jsx';
import { Wrapper } from '../WorkoutForm.jsx';

const SelectElement = styled.div`
	cursor: pointer;
	font-size: ${styles.inputFontSize};
	background-color: ${styles.inputBackgroundColor};
	padding: ${styles.inputPadding};
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};
	line-height: 1.3;
`;

const Choice = styled.div`
	display: flex;
	align-items: center;

	&:hover {
		background-color: hsla(0, 0%, 89%, 0.1);
	}
`;

const Content = styled.label`
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 3rem;
	z-index: 99;
	width: 100%;
	line-height: 1.5;
`;

const Dropdown = styled.div`
	width: 90%;
	height: 70%;
	max-width: calc(${styles.formWidth} + 5%);
	max-height: 100vh;
	overflow: scroll;
	background-color: ${styles.inputBackgroundColor};
	position: fixed;
	bottom: 0%;
	left: 50%;
	transform: translatex(-50%);
	z-index: 99;
	border-radius: ${styles.inputBorderRadius};
	${styles.customScrollbar};
`;

const CheckboxWrapper = styled.div`
	position: absolute;
	display: inline-block;
	width: 24px;
	height: 24px;
	border: 2px solid #ddd;
	border-radius: 10%;
	background: ${props => (props.checked ? 'white' : 'slate')};
	background-image: ${props => (props.checked ? `url(${checkmark})` : 'none')};
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center;
	cursor: pointer;
	margin-left: 1rem;
`;

const DropdownInvisibleBackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 98;
`;

const MotionDropdown = motion(Dropdown);

function MultiSelection({ label, populateWith, statePropertyToChange, userData, setUserData }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

	const handleChoices = event => {
		const value = event.target.value;
		let newEquipment;

		// Check and add choices, otherwise uncheck and remove
		if (value === 'All' || value === 'None') {
			newEquipment = [value];
		} else {
			if (userData[statePropertyToChange].includes(value)) {
				newEquipment = userData[statePropertyToChange].filter(choice => choice !== value);
				if (newEquipment.length === 0) {
					newEquipment.push('All');
				}
			} else {
				newEquipment = userData[statePropertyToChange].filter(choice => choice !== 'All' && choice !== 'None');
				newEquipment.push(value);
			}
		}

		console.log('Equipment:', newEquipment);
		setUserData({ ...userData, [statePropertyToChange]: newEquipment });
	};

	// Close on clicking outside
	useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

	// Disable scrolling on open
	useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isDropdownOpen]);

	// Appear animation
	const dropdownVariants = {
    hidden: { x: '-50%', y: "100%", opacity: 0 },
    visible: { x: '-50%', y: 0, opacity: 1 },
  };

	return (
		<>
			<Wrapper>
				<Label>{label}</Label>
				<SelectElement onClick={toggleDropdown}>{userData.equipment.join(', ')}</SelectElement>
				{isDropdownOpen && (
					<DropdownInvisibleBackgroundWrapper>
						<MotionDropdown 
							ref={dropdownRef}
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={dropdownVariants}
							transition={{ 
								type: "spring", 
								stiffness: 100,
								damping: 15,
							}}
						>
							{populateWith.map(choice => (
								<Choice key={choice}>
									<input
										type='checkbox'
										id={choice}
										value={choice}
										checked={userData.equipment.includes(choice)}
										onChange={handleChoices}
										css={css`
											display: none;
										`}
									/>
									<CheckboxWrapper
										onClick={() => handleChoices(choice)}
										checked={userData.equipment.includes(choice)}
									/>
									<Content htmlFor={choice}>{choice}</Content>
								</Choice>
							))}
						</MotionDropdown>
					</DropdownInvisibleBackgroundWrapper>
				)}
			</Wrapper>
		</>
	);
}

export default MultiSelection;
