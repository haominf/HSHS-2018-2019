import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MTableBody from "@material-ui/core/TableBody";

import { TableRow } from "./TableRow";

class TableBody extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return (
			<div>
				<MTableBody>
					<TableRow />
				</MTableBody>
			</div>
		);
	}

	componentWillUnmount() {
		if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	}
}

export default TableBody;
export { TableBody };
