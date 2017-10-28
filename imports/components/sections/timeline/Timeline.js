import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TimelineEntry from '../timelineEntry/TimelineEntry';

export const sort = (a, b) => {
  const aTime = a.time || a.timestamp;
  const bTime = b.time || b.timestamp;
  return bTime - aTime;
};

const Timeline = props => (
  <div className="timeline">
    <div className="timeline-entry">
      <div className="timeline-icon-container">
        <div className="timeline-icon-pre-line first" />
      </div>
    </div>
    <ReactCSSTransitionGroup
      transitionName="timeline-entry"
      transitionAppear={false}
      transitionEnterTimeout={500}
      transitionEnter={true}
      transitionLeave={false}
    >
      {props.timeline
        .sort(sort)
        .map((entry, index) => (
          <TimelineEntry
            key={entry.id || entry._id}
            {...entry}
            isNotLast={index !== props.timeline.length - 1}
          />
        ))}
    </ReactCSSTransitionGroup>
  </div>
);

Timeline.defaultProps = { timeline: [] };

export default Timeline;
