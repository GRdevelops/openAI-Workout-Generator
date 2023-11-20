import styled from "@emotion/styled";

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  margin: 6rem auto;
  letter-spacing: -0.02em;
  text-align: center;
  max-width: 20ch;
`;


function Heading() {
  return (
    <H1>
      Generate your next workout in <i>seconds</i> 💪
    </H1>
  )
}

export default Heading;