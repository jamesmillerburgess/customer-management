import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { STATUS_LABELS } from '../../fields/statusField/StatusField';

const StatusChangeMessage = (entry, direction) => (
  <span>
    Opportunity{' '}
    <Link to="#" className="keyword">
      {entry.opportunityName}
    </Link>{' '}
    moved {direction} from{' '}
    <span className="keyword">{STATUS_LABELS[entry.from]}</span> to{' '}
    <span className="keyword">{STATUS_LABELS[entry.to]}</span>
  </span>
);

export const TIMELINE_MESSAGES = {
  CREATION: () => 'was created',
  NOTE: () => 'left a note',
  STATUS_CHANGE_FORWARD: entry => StatusChangeMessage(entry, 'forward'),
  STATUS_CHANGE_BACKWARD: entry => StatusChangeMessage(entry, 'backward'),
};

const TIMELINE_ICONS = {
  CREATION: 'fa-plus',
  NOTE: 'fa-pencil',
  STATUS_CHANGE_FORWARD: 'fa-angle-double-right',
  STATUS_CHANGE_BACKWARD: 'fa-angle-double-left',
};

const TIMELINE_AVATARS = {
  CREATION: '/empty-company-pic.png',
  NOTE: '/empty-profile-pic.png',
  STATUS_CHANGE_FORWARD: '/empty-profile-pic.png',
  STATUS_CHANGE_BACKWARD: '/empty-profile-pic.png',
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
      transitionAppearTimeout={500}
      transitionEnter={true}
      transitionLeave={false}
    >
      {props.timeline.reverse().map((entry, index) => (
        <div className="timeline-entry" key={entry.id}>
          <div className="timeline-icon-container">
            <div className="timeline-icon-pre-line" />
            <div className="timeline-icon">
              <div className={`fa fa-fw ${TIMELINE_ICONS[entry.type]}`} />
            </div>
            {index !== props.timeline.length - 1 ? (
              <div className="timeline-icon-post-line" />
            ) : null}
          </div>
          <div className="timeline-details panel">
            <img
              className="timeline-avatar"
              src={TIMELINE_AVATARS[entry.type]}
            />
            <div className="timeline-details-body">
              <div className="timeline-message">
                <span className="keyword">{entry.keyword}</span>{' '}
                {TIMELINE_MESSAGES[entry.type](entry)}
              </div>
              <div className="timestamp">
                {moment(entry.timestamp).format('MMMM Do [at] h:mm a')}
              </div>
              {entry.note ? <div className="note">{entry.note}</div> : null}
            </div>
          </div>
        </div>
      ))}
    </ReactCSSTransitionGroup>
  </div>
);

Timeline.defaultProps = { timeline: [] };

export default Timeline;