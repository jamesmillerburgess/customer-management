import React from 'react';
import { DropTarget } from 'react-dnd';

export const listTarget = {
  drop(props, monitor, component) {
    return { status: props.status };
  },
};

export const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

class OpportunityList extends React.Component {
  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div className="list">
        {isOver && (
          <div className="panel card">
            <div className="dummy-title" />
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}

export const OpportunityListNoContext = OpportunityList;

export default DropTarget('PANEL', listTarget, collect)(OpportunityList);
