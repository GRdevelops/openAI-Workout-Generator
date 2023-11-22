import { useState, useEffect, useRef  } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import checkmark from '../../assets/checkmark.svg';

// Custom Hook
import useOutsideClick from '../../functions/useOutsideClicks.js';

// Styles
import styles from '../../styles/theme.js';

const SelectElement = styled.div`
  font-size: ${styles.inputFontSize};
  cursor: pointer;
  background-color: ${styles.inputBackgroundColor};
  padding: ${styles.inputPadding};
  border: ${styles.inputBorder};
  border-radius: ${styles.inputBorderRadius};
  margin-bottom: ${styles.verticalSpace};
`;

const Choice = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background-color: hsla(0, 0%, 89%, 0.1);
  }
`;

const Label = styled.label`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  z-index: 99;
  width: 100%;
  line-height: 1.5;
`;

const Dropdown = styled.div`
	width: 80%;
	max-width: calc(${styles.formWidth} + 5%);
	max-height: 100vh;
	overflow: scroll;
	background-color: ${styles.inputBackgroundColor};
	position: fixed;
	top: 0%;
	left: 50%;
	transform: translatex(-50%);
	z-index: 99;
	border-radius: ${styles.inputBorderRadius};
	${styles.customScrollbar};
`;

const CheckboxWrapper = styled.div`
	position: absolute;
	display: inline-block;
	width: 20px;
	height: 20px;
	border: 2px solid #ddd;
	border-radius: 10%;
	background: ${props => (props.checked ? 'white' : 'slate')};
	background-image: ${props => (props.checked ? `url(${checkmark})` : 'none')};
	background-repeat: no-repeat;
	background-size: 90%;
	background-position: 1px 1px;
	cursor: pointer;
	margin-left: 1rem;
`;


function MultiSelection({ choices, statePropertyToChange, userData, setUserData }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

	const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  const handleChoices = event => {
		const value = event.target.value;
		let newChoices;

    // Check and add choices, otherwise uncheck and remove
		if (value === 'All' || value === 'None') {
			newChoices = [value];
		} else {
			if (userData[statePropertyToChange].includes(value)) {
				newChoices = userData[statePropertyToChange].filter(choice => choice !== value);
			} else {
				newChoices = userData[statePropertyToChange].filter(choice => choice !== 'All' && choice !== 'None');
				newChoices.push(value);
			}
		}

		setUserData({ ...userData, [statePropertyToChange]: newChoices });

		console.log(newChoices);
	};

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  return (
    <>
      <SelectElement
				onClick={toggleDropdown}>
				{userData.equipment.join(', ')}
			</SelectElement>
			{isDropdownOpen && (
				<Dropdown ref={dropdownRef}>
					{choices.map(choice => (
						<Choice
							key={choice}>
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
							<Label
								htmlFor={choice}>
								{choice}
							</Label>
						</Choice>
					))}
				</Dropdown>
			)}
    </>
  )
}


export default MultiSelection;