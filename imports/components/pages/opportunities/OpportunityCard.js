import React from 'react';
import { DragSource } from 'react-dnd';

const panelTypes = {
  PANEL: 'PANEL',
};

const opportunitySource = {
  beginDrag(props) {
    console.log('beginDrag');
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
    return connectDragSource(
      <div>{isDragging ? null : <div className="panel">Hello!</div>}</div>
    );
  }
}

export default DragSource(panelTypes.PANEL, opportunitySource, collect)(
  OpportunityCard
);
