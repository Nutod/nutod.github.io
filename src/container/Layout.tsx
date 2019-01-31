import React from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import SideProjects from "../components/SideProjects/SideProjects";

export default function Layout() {
	return (
		<>
			<Hero />
			<SideProjects />
			<Footer />
		</>
	);
}
