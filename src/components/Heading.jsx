import styled from "@emotion/styled";

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
`;


function Heading() {
  return (
    <H1>
      Welcome to your next workout.
    </H1>
  )
}

export default Heading;