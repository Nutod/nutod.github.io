import React, { Component } from "react";

export default class WithError extends Component {
	state = {
		error: null
	};

	componentDidCatch = (error: any) => {
		this.setState({ error });
	};

	render() {
		const { children } = this.props;

		if (this.state.error) {
			return <h2>Something went wrong!!!</h2>;
		}

		return <>{children}</>;
	}
}
