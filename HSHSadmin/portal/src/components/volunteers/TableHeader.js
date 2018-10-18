import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MTableHeader from "@material-ui/core/TableHead";

class TableHeader extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return <MTableHeader />;
	}

	componentWillUnmount() {
		if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	}
}

export default TableHeader;
export { TableHeader };
