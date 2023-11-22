import { css } from '@emotion/react';
import styled from '@emotion/styled';

import styles from '../../styles/theme.js';

const Radio = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: ${styles.verticalSpace};
`;

function RadioButton({ label, optionLeft, optionRight, statePropertyToChange, userData, setUserData }) {


  return (
    <Radio>
			<label>{label}:</label>
			<label
				htmlFor={optionLeft}
				css={css`
					cursor: pointer;
				`}>
				<input
          type='radio'
          id={optionLeft}
          name={statePropertyToChange}
          value={optionLeft}
          checked={userData[statePropertyToChange] === optionLeft}
          onChange={() => setUserData({ ...userData, [statePropertyToChange]: optionLeft })}
        />
				{optionLeft}
			</label>
			<label
				htmlFor={optionRight}
				css={css`
					cursor: pointer;
				`}>
				<input
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
  )
}

export default RadioButton;