import styled from '@emotion/styled';

const H1 = styled.h1`
	font-size: clamp(3rem, 9vw, 4.5rem);
	font-weight: 500;
	margin: 6rem auto;
	letter-spacing: -0.02em;
	text-align: center;
	max-width: 20ch;
	line-height: 1.2;
`;

function Heading() {
	return (
		<>
			<H1>
				Generate your next workout in <i>seconds</i> 💪
			</H1>
		</>
	);
}

export default Heading;
