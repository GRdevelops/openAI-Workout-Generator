import styled from "@emotion/styled";

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
`

function WorkoutResult({ data }) {
  return (
    <> 
      <H3>Your workout:</H3>
      <Paragraph>{data}</Paragraph>
    </>
  );
}

export default WorkoutResult;
