import { css } from '@emotion/react';
import styled from "@emotion/styled";
import styles from '../theme.js';


const Table = styled.div`
  max-width: ${styles.formWidth};
  margin: 2rem auto;
  background-color: ${styles.inputBackgroundColor};
  border-radius: ${styles.inputBorderRadius};
  padding: 1rem;
`;

function DayTable({ dayName, dayObject }) {

  console.log(dayObject);

  const exercises = Object.entries(dayObject.exercises).map(([exerciseName, details], index) => (
    <div key={index}><span>{exerciseName}</span> <span>{details}</span></div>
  ));

  return (
    <Table>
      <h4 css={css`margin: 0;`}>{dayName}</h4>
      <p>{dayObject.type}</p>
      {exercises}
    </Table>
  )
}

export default DayTable;