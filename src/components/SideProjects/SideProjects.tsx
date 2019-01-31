import React from "react";
import { SideProjectWrapper } from "../styles/Wrapper";
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

export default function SideProject() {
	const state = [
		{
			title: "Burger Builder",
			from: "#F0CB35",
			to: "#C02425",
			url: "http://burger-react-d3b90.firebaseapp.com"
		},
		{
			title: "Teams App",
			from: "#F15F79",
			to: "#B24592",
			url: "https://codesandbox.io/s/m5v40q9n2p"
		},
		{
			title: "Robots App",
			from: "#DBD5A4",
			to: "#649173",
			url: "https://codesandbox.io/s/xojv3zw5mp"
		}
	];
	return (
		<SideProjectWrapper>
			<SectionHeader>Side Projects</SectionHeader>
			<CardContainer>
				{state.map(project => (
					<Card>
						<CardSide>
							<CardSideFront>
								<CardPicture from={project.from} to={project.to}>
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
		</SideProjectWrapper>
	);
}
