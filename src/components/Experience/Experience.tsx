import React from "react";
import { ExperienceWrapper } from "../styles/Wrapper";
import { SectionHeader } from "../styles/Headers";
import {
	CardContainer,
	Card,
	CardSide,
	CardSideFront,
	CardSideBack,
	CardPicture,
	CardHeading,
	CardContent,
	CardLink
} from "../styles/Card";
import KudiBG from "../assets/kudi-min.png";
import InstantCleanersBG from "../assets/cleaners-min.png";
import CaproBG from "../assets/capro-min.png";

// TODO: Add dynamic import for images for webpack to handle

const data = [
	{
		title: "Kudi.ai",
		url: "https://kudi.ai",
		image: KudiBG,
		from: "#2193b0",
		to: "#6dd5ed"
	},
	{
		title: "Instant Cleaners",
		url: "http://instantcleaners.com",
		image: InstantCleanersBG,
		from: "#FDC830",
		to: "#F37335"
	},
	{
		title: "Capro USA",
		url: "http://caprousa.org",
		image: CaproBG,
		from: "#FF4B2B",
		to: "#FF416C"
	}
];

export default function Experience() {
	return (
		<ExperienceWrapper>
			<SectionHeader>Previous Projects</SectionHeader>
			<CardContainer>
				{data.map(project => (
					<Card key={project.title}>
						<CardSide>
							<CardSideFront>
								<CardPicture
									url={project.image}
									from={project.from}
									to={project.to}
								>
									&nbsp;
								</CardPicture>
								<CardHeading from={project.from} to={project.to}>
									{project.title}
								</CardHeading>
							</CardSideFront>
							<CardSideBack from={project.from} to={project.to}>
								<CardContent>
									<CardLink href={project.url} target="_blank">
										View Project
									</CardLink>
								</CardContent>
							</CardSideBack>
						</CardSide>
					</Card>
				))}
			</CardContainer>
		</ExperienceWrapper>
	);
}
