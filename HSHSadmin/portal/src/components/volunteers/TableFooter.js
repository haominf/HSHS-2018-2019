import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MTableFooter from "@material-ui/core/TableFooter";

class TableFooter extends Component {
	constructor(props) {
		super(props);
		let self = this;
	}

	render() {
		return (
			<div>
				<MTableFooter>hello Footer</MTableFooter>
			</div>
		);
	}

	componentWillUnmount() {
		if (this.statePromises) this.statePromises.forEach(p => p.cancel());
	}
}

export default TableFooter;
export { TableFooter };
