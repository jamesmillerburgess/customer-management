import React from 'react';
import { DragSource } from 'react-dnd';
import { Link } from 'react-router-dom';

import './OpportunityCard.scss';

const panelTypes = {
  PANEL: 'PANEL',
};

const opportunitySource = {
  beginDrag(props) {
    return { id: props.id };
  },
  endDrag(props, monitor) {
    const opportunityId = props._id;
    const { status } = monitor.getDropResult();
    Meteor.call('opportunity.setStatus', opportunityId, status, (err, res) => {
      if (err) {
        console.log(err);
      }
    });
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
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        {isDragging ? null : (
          <div className="panel card">
            <Link to="#" className="title">
              {this.props.name}
            </Link>
            <div className="icons" />
          </div>
        )}
      </div>
    );
  }
}

export default DragSource(panelTypes.PANEL, opportunitySource, collect)(
  OpportunityCard
);
