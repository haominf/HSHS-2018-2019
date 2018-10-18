import React, {Component} from 'react';
import * as firebase from 'firebase';
import {CheckListCard} from './cards/CheckListCard'
import {ListCard} from './cards/ListCard'

class InteractionsPage extends Component {
    constructor(props) {
        super(props);
        let self = this;
    }

    render() {
        return (
            <div style = {{
              height: "100%",
              width: "100%",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: "auto",
              flexWrap: "wrap",
              }}>
              <ListCard
                  label = "Interactions"
                  dataRef = {firebase.database().ref("/interactions")}
                  hasTitle = {false}
                  style = {{flex: 1, margin: 10}}/>
            </div>
        );
    }

    componentWillUnmount() {
        if (this.statePromises)
            this.statePromises.forEach(p => p.cancel());
    }
}

export default InteractionsPage;
