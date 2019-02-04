import React from "react";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import SideProjects from "../components/SideProjects/SideProjects";
import Footer from "../components/Footer/Footer";

// TODO: Add Component tests

export default function Layout() {
	return (
		<>
			<Hero />
			<Experience />
			<SideProjects />
			<Footer />
		</>
	);
}
