import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import React, {Component} from 'react';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Button from 'material-ui/Button';
import * as firebase from 'firebase';


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
      this.state = { checked: [0] };
    }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {

    const listContent = this.props.listContent;
    var key_array = [];
    var value_array = [];
    for (var key in listContent) {
        key_array.push(key);
        value_array.push(listContent[key]);
    }

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {value_array.map(value => (
            <ListItem
              key={key_array[value_array.indexOf(value)]}
              role={undefined}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary={`${value.title}`} />
              <ListItemText secondary={`${value.description}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
