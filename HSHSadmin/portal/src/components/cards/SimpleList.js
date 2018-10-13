import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import React, {Component} from 'react';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Button from 'material-ui/Button';
import * as firebase from 'firebase';

import Dialog from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog';
import DialogContent from 'material-ui/Dialog';
import DialogContentText from 'material-ui/Dialog';
import DialogTitle from 'material-ui/Dialog';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleList extends React.Component {

    constructor(props) {
      super(props);
    }

    state = {
      open: false,
    };

  handleToggle = (key, value) => () => {
      const message = value.title + "\n" + value.description;
      alert(message);
  };

  render() {
    const hasTitle = this.props.hasTitle;
    const listContent = this.props.listContent;
    var key_array = [];
    var value_array = [];
    for (var key in listContent) {
        key_array.push(key);
        value_array.push(listContent[key]);
    }

    const { classes } = this.props;

    if (hasTitle) {
        console.log(this.state.open);
        return (
          <div className={classes.root}>
            <List>
              {value_array.map(value => (
                <ListItem
                  key={key_array[value_array.indexOf(value)]}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle}
                  className={classes.listItem}
                >
                  <ListItemText primary={`${value.title}`} secondary={`${value.description}`} />
                </ListItem>
              ))}
            </List>
          </div>
        );
    } else {
        return (
          <div className={classes.root}>
            <List>
              {value_array.map(value => (
                <ListItem
                  key={key_array[value_array.indexOf(value)]}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(key_array[value_array.indexOf(value)], value)}
                  className={classes.listItem}
                >
                  <ListItemText primary={`${value.description}`} />
                </ListItem>
              ))}
            </List>
          </div>
        );
    }

  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
