import { css } from '@emotion/react';
import styled from '@emotion/styled';

import styles from '../../styles/theme.js';
import { Wrapper } from '../WorkoutForm.jsx';

const Radio = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const Dot = styled.input`
	width: 1rem;
	height: 1rem;
`;

function RadioButton({ label, optionLeft, optionRight, statePropertyToChange, userData, setUserData }) {


  return (
		<Wrapper>
			<Radio>
				<label>{label}:</label>
				<label
					htmlFor={optionLeft}
					css={css`
						cursor: pointer;
					`}>
					<Dot
						type='radio'
						id={optionLeft}
						name={statePropertyToChange}
						value={optionLeft}
						checked={userData[statePropertyToChange] === optionLeft}
						onChange={() => setUserData({ ...userData, [statePropertyToChange]: optionLeft })}
					/>{' '}
					{optionLeft}
				</label>
				<label
					htmlFor={optionRight}
					css={css`
						cursor: pointer;
					`}>
					<Dot
						type='radio'
						id={optionRight}
						name={statePropertyToChange}
						value={optionRight}
						checked={userData[statePropertyToChange] === optionRight}
						onChange={() => setUserData({ ...userData, [statePropertyToChange]: optionRight })}
					/>{' '}
					{optionRight}
				</label>
			</Radio>
		</Wrapper>
  )
}

export default RadioButton;