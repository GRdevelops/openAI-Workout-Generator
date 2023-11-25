import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Styles
import styles from '../../styles/theme';
import { Label } from '../WorkoutForm';
import { Wrapper } from '../WorkoutForm';

const customScrollbar = css`
	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: ${styles.inputBackgroundColor};
	}

	&::-webkit-scrollbar-thumb {
		background-color: #666;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #aaa;
	}

	&::-webkit-scrollbar-corner {
		background-color: ${styles.inputBackgroundColor};
	}

	&::-webkit-resizer {
		background-color: ${styles.inputBackgroundColor};
	}
`;

const Input = styled.input`
	color: ${styles.white};
	font-family: ${styles.fontFamily};
	font-size: ${styles.inputFontSize};
	padding: ${styles.inputPadding};
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};
	background-color: ${styles.inputBackgroundColor};
`;

const Select = styled.select`
	font-family: ${styles.fontFamily};
	font-size: ${styles.inputFontSize};
	padding: ${styles.inputPadding};
	padding-left: 0.8rem;
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};
	background-color: ${styles.inputBackgroundColor};
`;

const LongText = styled.textarea`
	font-family: ${styles.fontFamily};
	font-size: ${styles.inputFontSize};
	padding: ${styles.inputPadding};
	min-height: 7rem;
	border: ${styles.inputBorder};
	border-radius: ${styles.inputBorderRadius};
	background-color: ${styles.inputBackgroundColor};

	&::placeholder {
		vertical-align: top;
		text-align: start;
	}

	${customScrollbar};
`;

export function Bodyweight({ userData, setUserData }) {
	return (
		<>
			<Wrapper>
				<Label htmlFor='bodyweight'>Bodyweight:</Label>
				<Input
					id='bodyweight'
					type='number'
					value={userData.weight}
					onChange={e => setUserData({ ...userData, weight: e.target.value })}
				/>
			</Wrapper>
		</>
	);
}

export function Selection({ label, populateWith, statePropertyToChange, userData, setUserData }) {
	return (
		<>
			<Wrapper>
				<Label htmlFor={statePropertyToChange}>{label}</Label>
				<Select
					id={statePropertyToChange}
					name={statePropertyToChange}
					onChange={e => setUserData({ ...userData, [statePropertyToChange]: e.target.value })}>
					{populateWith.map((option, index) => (
						<option
							key={index}
							value={option}>
							{option}
						</option>
					))}
				</Select>
			</Wrapper>
		</>
	);
}

export function TextArea({ label, placeholder, statePropertyToChange, userData, setUserData, optional}) {
  return (
    <>
			<Wrapper>
				<Label>
					{label}
					{optional && (
						<span css={css`opacity: 0.5;`}>{' '}(optional)</span>
					)}
				</Label>
				<LongText
					id={statePropertyToChange}
					name={statePropertyToChange}
					placeholder={placeholder}
					value={userData[statePropertyToChange]}
					onChange={e => setUserData({ ...userData, [statePropertyToChange]: e.target.value })}
				/>
			</Wrapper>
    </>
  )
};
