import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MTableRow from "@material-ui/core/TableRow";

import { TableCell } from "./TableCell";

class TableRow extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return (
			<div>
				<MTableRow>
					<TableCell />
				</MTableRow>
			</div>
		);
	}

	componentWillUnmount() {
		if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	}
}

export default TableRow;
export { TableRow };
