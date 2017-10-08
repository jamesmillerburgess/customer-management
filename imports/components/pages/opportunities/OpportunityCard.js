import React from 'react';
import { DragSource } from 'react-dnd';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import './OpportunityCard.scss';

const panelTypes = {
  PANEL: 'PANEL',
};

export const opportunitySource = {
  beginDrag(props) {
    return { id: props.id };
  },
  endDrag(props, monitor) {
    const opportunityId = props._id;
    const { status } = monitor.getDropResult();
    Meteor.call(
      'opportunity.updateStatus',
      opportunityId,
      { status, id: new Mongo.ObjectID()._str },
      (err, res) => {
        if (err) {
          console.log(err);
        }
      }
    );
  },
};

export function collect(connect, monitor) {
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
            <Link to={`/opportunities/${this.props._id}`} className="title">
              {this.props.name}
            </Link>
            <div className="icons" />
          </div>
        )}
      </div>
    );
  }
}

export const OpportunityCardNoContext = OpportunityCard;

export default DragSource(panelTypes.PANEL, opportunitySource, collect)(
  OpportunityCard
);
