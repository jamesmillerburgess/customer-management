import React from 'react';
import { DragSource } from 'react-dnd';

const panelTypes = {
  PANEL: 'PANEL',
};

const opportunitySource = {
  beginDrag(props) {
    return { id: props.id };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class OpportunityCard extends React.Component {
  render() {
    console.log(this.props);
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(<div className="panel">Hello!</div>);
  }
}

export default DragSource(panelTypes.PANEL, opportunitySource, collect)(
  OpportunityCard
);
