import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MTable from "@material-ui/core/Table";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";

class VolunteerTable extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return (
			<div>
				<MTable>
					<TableHeader />
					<TableBody />
					<TableFooter />
				</MTable>
			</div>
		);
	}

	componentWillUnmount() {
		if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	}
}

export default VolunteerTable;
export { VolunteerTable };
