import React from 'react';
import { DropTarget } from 'react-dnd';

const listTarget = {
  drop(props, monitor) {
    console.log('listTarget');
    console.log(props);
    // Meteor.call('opportunity.setStatus', opportunity.id, props.status, (err, res) => {
    //
    // });
  },
};

function collect(connect, monitor) {
  console.log('OpportunityList collect');
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class OpportunityList extends React.Component {
  render() {
    console.log('OpportunityList');
    console.log(this.props);
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div className="list">
        {isOver && <div className="panel">Dummy</div>}
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget('PANEL', listTarget, collect)(OpportunityList);
