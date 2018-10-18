import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MTableCell from "@material-ui/core/TableCell";

class TableCell extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return (
			<div>
				<MTableCell>hello</MTableCell>
			</div>
		);
	}

	componentWillUnmount() {
		if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	}
}

export default TableCell;
export { TableCell };
