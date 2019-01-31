import styled from "styled-components";

export const HeadingOne = styled.h1`
	font-family: "Open Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	color: #999;
	font-size: 4rem;
	font-weight: 200;
	line-height: 1.4;
	margin: 0 0 10px;
	letter-spacing: 3px;
	text-transform: uppercase;

	@media (max-width: 1000px) {
		font-size: 3.5rem;
	}

	@media (max-width: 815px) {
		font-size: 3rem;
	}

	@media (max-width: 636px) {
		font-size: 2.5rem;
	}

	@media (max-width: 570px) {
		font-size: 2rem;
	}

	@media (max-width: 430px) {
		font-size: 1.8rem;
	}
`;

export const HeroHeader = styled(HeadingOne)`
	font-family: "Playfair Display", serif;
	font-size: 7rem;
	font-weight: 900;
	color: #1d2b4c;

	@media (max-width: 1000px) {
		font-size: 6.5rem;
	}

	@media (max-width: 815px) {
		font-size: 5rem;
	}

	@media (max-width: 636px) {
		font-size: 4.4rem;
	}

	@media (max-width: 570px) {
		font-size: 3.7rem;
	}

	@media (max-width: 490px) {
		font-size: 3.2rem;
	}

	@media (max-width: 430px) {
		font-size: 3rem;
	}
`;

export const HeadingThree = styled.h3`
	font-family: "Playfair Display", serif;
	-webkit-font-smoothing: antialiased;
	color: #1d2b4c;
	font-size: 5rem;
	font-weight: 400;
	line-height: 1.4;
	margin: 0 0 10px;
	letter-spacing: -0.05em;

	@media (max-width: 815px) {
		font-size: 4rem;
	}

	@media (max-width: 636px) {
		font-size: 3.3rem;
		margin-bottom: 0;
	}

	@media (max-width: 570px) {
		font-size: 2.5rem;
	}

	@media (max-width: 430px) {
		font-size: 2rem;
	}
`;

export const SectionHeader = styled.h1`
	font-family: "Open Sans", serif;
	-webkit-font-smoothing: antialiased;
	color: #1d2b4c;
	margin: 1rem;
	margin-top: 1.5rem;
	font-weight: 400;
	text-transform: uppercase;
	font-size: 3.5rem;

	@media (max-width: 636px) {
		font-size: 3rem;
	}

	@media (max-width: 500px) {
		font-size: 2.5rem;
	}
`;
