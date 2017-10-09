import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const APPOINTMENT_SCHEDULED = 'APPOINTMENT_SCHEDULED';
const QUALIFIED_TO_BUY = 'QUALIFIED_TO_BUY';
const PRESENTATION_SCHEDULED = 'PRESENTATION_SCHEDULED';
const DECISION_MAKER_BOUGHT_IN = 'DECISION_MAKER_BOUGHT_IN';
const CONTRACT_SENT = 'CONTRACT_SENT';
const CLOSED_WON = 'CLOSED_WON';
const CLOSED_LOST = 'CLOSED_LOST';

export const STATUS_VALUES = [
  APPOINTMENT_SCHEDULED,
  QUALIFIED_TO_BUY,
  PRESENTATION_SCHEDULED,
  DECISION_MAKER_BOUGHT_IN,
  CONTRACT_SENT,
  CLOSED_WON,
  CLOSED_LOST,
];

export const STATUS_LABELS = {
  [STATUS_VALUES[0]]: 'Appointment Scheduled',
  [STATUS_VALUES[1]]: 'Qualified to Buy',
  [STATUS_VALUES[2]]: 'Presentation Scheduled',
  [STATUS_VALUES[3]]: 'Decision Maker Bought-In',
  [STATUS_VALUES[4]]: 'Contract Sent',
  [STATUS_VALUES[5]]: 'Closed Won',
  [STATUS_VALUES[6]]: 'Closed Lost',
};

export const OUTCOME_LABELS = {
  NO_ANSWER: 'No answer',
  BUSY: 'Busy',
  WRONG_NUMBER: 'Wrong number',
  LEFT_LIVE_MESSAGE: 'Left live message',
  LEFT_VOICEMAIL: 'Left voicemail',
  CONNECTED: 'Connected',
};

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
  CALL: () => 'made a call',
  EMAIL: () => 'sent an email',
  MEETING: () => 'had a meeting',
  STATUS_CHANGE_FORWARD: entry => StatusChangeMessage(entry, 'forward'),
  STATUS_CHANGE_BACKWARD: entry => StatusChangeMessage(entry, 'backward'),
};

const TIMELINE_ICONS = {
  CREATION: 'fa-plus',
  NOTE: 'fa-pencil',
  CALL: 'fa-phone',
  EMAIL: 'fa-envelope',
  MEETING: 'fa-handshake-o',
  STATUS_CHANGE_FORWARD: 'fa-angle-double-right',
  STATUS_CHANGE_BACKWARD: 'fa-angle-double-left',
};

const TIMELINE_AVATARS = {
  CREATION: '/empty-company-pic.png',
  NOTE: '/empty-profile-pic.png',
  CALL: '/empty-profile-pic.png',
  EMAIL: '/empty-profile-pic.png',
  MEETING: '/empty-profile-pic.png',
  STATUS_CHANGE_FORWARD: '/empty-profile-pic.png',
  STATUS_CHANGE_BACKWARD: '/empty-profile-pic.png',
};

const sort = (a, b) => {
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
      {props.timeline.sort(sort).map((entry, index) => (
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
                {moment(entry.time || entry.timestamp).format(
                  'MMMM Do [at] h:mm a'
                )}
              </div>
              <div className="note">
                {entry.outcome && (
                  <div className="outcome">
                    <span className="keyword">Call outcome: </span>
                    {OUTCOME_LABELS[entry.outcome]}
                  </div>
                )}
                {entry.note && <div>{entry.note}</div>}
                {entry.text && <div>{entry.text}</div>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </ReactCSSTransitionGroup>
  </div>
);

Timeline.defaultProps = { timeline: [] };

export default Timeline;
