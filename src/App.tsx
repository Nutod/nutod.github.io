import React from "react";
import Layout from "./container/Layout";
import WithError from "./hoc/WithError/WithError";

// TODO: Add PropType validation
// TODO: Add Component tests
export default function App() {
	return (
		<WithError>
			<Layout />
		</WithError>
	);
}
