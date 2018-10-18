import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import React, {Component} from 'react';
import Card, {CardContent, CardActions} from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    width: '100%',
    height: '50%',
    maxWidth: 360,
    backgroundColor: 'white',
  },
});

class SimpleList extends React.Component {

    constructor(props) {
      super(props);
      this.state = { listContent: {}, open: false };
    }

    componentDidMount() {
      let self = this;
      let dataRef = this.props.dataRef;
      dataRef.on('value', (snapshot) => {
          var newContent = {};
          snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            newContent[childKey] = childData;
          });
          console.log(newContent);
        self.setState({
          listContent: newContent
        });
      });
    }

  handleToggle = (key, value) => () => {
      const message = value.title + "\n" + value.description;
      alert(message);
  };

  render() {
    const hasTitle = this.props.hasTitle;
    const listContent = this.state.listContent;
    var key_array = [];
    var value_array = [];
    for (var key in listContent) {
        key_array.push(key);
        value_array.push(listContent[key]);
    }

    if (hasTitle) {
        console.log(this.state.open);
        return (
          <div>
            <List>
              {value_array.map(value => (
                <ListItem
                  key={key_array[value_array.indexOf(value)]}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle}
                >
                  <ListItemText primary={`${value.title}`} secondary={`${value.description}`} />
                </ListItem>
              ))}
            </List>
          </div>
        );
    } else {
        return (
          <div style={{
              backgroundColor: "#fff",
              height: "100%",
              width: "100vw",
              paddingTop: "400px",
              flexDirection: "row",
              display: "flex",
              alignItems: "left",
              justifyContent: "space-evenly",
              margin: "auto",
              flexWrap: "wrap"
          }}>
            <List>
              {value_array.map(value => (
                <ListItem
                  key={key_array[value_array.indexOf(value)]}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(key_array[value_array.indexOf(value)], value)}
                >
                  <ListItemText primary={`${value.description}`} />
                </ListItem>
              ))}
            </List>
          </div>
        );
    }

  }

  componentWillUnmount() {
      if (this.statePromises)
          this.statePromises.forEach(p => p.cancel());
  }
}

export default withStyles(styles)(SimpleList);
