import React from 'react';
import { DropTarget } from 'react-dnd';

const listTarget = {
  drop(props, monitor) {
    console.log(props);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

class OpportunityList extends React.Component {
  render() {
    console.log(this.props);
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(<div className="list">{this.props.children}</div>);
  }
}

export default DropTarget('PANEL', listTarget, collect)(OpportunityList);
