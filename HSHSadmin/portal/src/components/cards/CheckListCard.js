import React, {Component} from 'react';
import Card, {CardContent, CardActions} from 'material-ui/Card';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import CheckboxList from './CheckboxList';
import Typography from 'material-ui/Typography';

class CheckListCard extends Component {
  constructor(props) {
    super(props);
    this.state = { listContent: {} };
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

  render() {
        console.log(this.state.listContent);

    return(
      <Card style = {this.props.style}>
        <CardContent>
            <Typography variant="title" gutterBottom>
              {this.props.label}
            </Typography>
            <CheckboxList listContent = {this.state.listContent}/>
        </CardContent>
      </Card>
    );
  }

  componentWillUnmount() {
      if (this.statePromises)
          this.statePromises.forEach(p => p.cancel());
  }

}

export default CheckListCard;
export {CheckListCard};
