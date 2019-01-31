import React from "react";
import { HeadingThree, HeroHeader } from "../styles/Headers";
import { HeroWrapper, HeroBackground } from "../styles/Wrapper";
import { Button } from "../styles/Button";
import "./Hero.css";

export default function Hero() {
	const Text = ["Frontend Developer", "UI/UX Developer"];
	const typingConfig = {
		text: Text,
		className: "HeadingOne",
		speed: 100,
		eraseDelay: 3000,
		cursor: "_"
	};

	return (
		<HeroWrapper>
			<div style={{ width: "80vw" }}>
				<HeadingThree>Hi! I'm</HeadingThree>
				<HeroHeader>Oladotun Aluko</HeroHeader>
				<p style={{ marginTop: "2.7rem" }}>
					<Button href="Résume.pdf" download="Oladotun Aluko Résume">
						Download Resume
					</Button>
				</p>
			</div>
			<HeroBackground />
		</HeroWrapper>
	);
}
