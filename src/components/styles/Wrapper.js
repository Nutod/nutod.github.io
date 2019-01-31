import styled from "styled-components";

export const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const HeroWrapper = styled(Wrapper)`
	@media (max-width: 430px) {
		height: 90vh;
		background: #ddd;
		clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
	}
`;

export const HeroBackground = styled.div`
	background-image: url(hero-bg.png);
	height: 100%;
	width: 100%;
	background-repeat: no-repeat;
	background-position: right center;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;

	@media (max-width: 430px) {
		display: none;
	}
`;

export const ExperienceWrapper = styled(Wrapper)`
	height: auto;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	padding-top: 6rem;
	background: url(contact-bg-1.png);
`;

export const SideProjectWrapper = styled(Wrapper)`
	height: auto;
	flex-direction: column;
	margin-top: 2rem;
	align-items: center;
	padding-top: 6rem;
	background: url(hello-bg-2.png);

	@media (max-width: 430px) {
		padding-top: 1rem;
	}
`;

export const FooterWrapper = styled(Wrapper)`
	flex-direction: column;
	align-items: center;
	padding: 1.5rem;
	padding-top: 6rem;
	background-color: #032973;
	height: 50vh;
	color: #fff;

	&:before {
		background: url(contact-bg.png) top center no-repeat;
		margin-top: -1rem;
		position: absolute;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
		content: "";
		z-index: 1;
	}

	@media (max-width: 430px) {
		margin: 0 auto;
	}
`;
