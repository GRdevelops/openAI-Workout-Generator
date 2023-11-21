import styled from "@emotion/styled";
import { css } from '@emotion/react';

// Components
import DayTable from './WorkoutResult/DayTable';

const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`

const Paragraph = styled.p`
  max-width: 50ch;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;
`;


function WorkoutResult({ data }) {

  data = `{
    "Monday": {
      "type": "Full Body",
      "exercises": {
        "Squats": "3 x 10",
        "Push-ups": "3 x max",
        "Bent-over Rows": "3 x 10",
        "Plank": "3 x 30 seconds"
      }
    },
    "Wednesday": {
      "type": "Upper Body",
      "exercises": {
        "Bench Press": "3 x 10",
        "Pull-ups": "3 x max",
        "Shoulder Press": "3 x 10",
        "Bicep Curls": "3 x 12",
        "Tricep Dips": "3 x max"
      }
    },
    "Friday": {
      "type": "Lower Body",
      "exercises": {
        "Deadlifts": "3 x 10",
        "Lunges": "3 x 10 each leg",
        "Calf Raises": "3 x 15",
        "Leg Raises": "3 x 12"
      }
    }
  }`;

  if (data) {
    try {
      const parsedData = JSON.parse(data);
      // console.log(parsedData);

      const renderedDays = Object.keys(parsedData).map((day, index) => (
        <DayTable key={index} dayName={day} dayObject={parsedData[day]} />
      ));

      return (
        <>
          <H3>Your workout:</H3>
          {renderedDays}
        </>
      )
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return (
          <>
            <Paragraph css={css`margin-top: 3rem;`}>Error loading workout data. Invalid format. 😞</Paragraph>
          </>
        )
    }

  }
}

export default WorkoutResult;
