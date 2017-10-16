import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

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

const StatusChangeMessage = (props, direction) => (
  <span>
    {props.username || 'Someone'} moved{' '}
    <Link to={`/opportunities/${props.opportunityId}`} className="keyword">
      {props.opportunityName}
    </Link>{' '}
    {direction} from{' '}
    <span className="keyword">{STATUS_LABELS[props.from]}</span> to{' '}
    <span className="keyword">{STATUS_LABELS[props.to]}</span>
  </span>
);

export const TIMELINE_MESSAGES = {
  CREATION: props => (
    <span>
      {props.username || 'Someone'} created{' '}
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
    </span>
  ),
  NOTE: props => (
    <span>
      {props.username || 'Someone'} left a note on{' '}
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
    </span>
  ),
  CALL: props => (
    <span>
      {props.username || 'Someone'} made a call to{' '}
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
    </span>
  ),
  EMAIL: props => (
    <span>
      {props.username || 'Someone'} sent an email to{' '}
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
    </span>
  ),
  MEETING: props => (
    <span>
      {props.username || 'Someone'} had a meeting with{' '}
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
    </span>
  ),
  STATUS_CHANGE_FORWARD: props => StatusChangeMessage(props, 'forward'),
  STATUS_CHANGE_BACKWARD: props => StatusChangeMessage(props, 'backward'),
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

const TimelineEntry = props => (
  <div className="timeline-entry" key={props.id}>
    <div className="timeline-icon-container">
      <div className="timeline-icon-pre-line" />
      <div className="timeline-icon">
        <div className={`fa fa-fw ${TIMELINE_ICONS[props.type]}`} />
      </div>
      {props.isNotLast && <div className="timeline-icon-post-line" />}
    </div>
    <div className="timeline-details panel">
      <img className="timeline-avatar" src={TIMELINE_AVATARS[props.type]} />
      <div className="timeline-details-body">
        <div className="timeline-message">
          {/* <span className="keyword">{props.keyword}</span>{' '} */}
          {TIMELINE_MESSAGES[props.type](props)}
        </div>
        <div className="timestamp">
          {moment(props.time || props.timestamp).format('MMMM Do [at] h:mm a')}
        </div>
        {(props.outcome || props.note || props.text) && (
          <div className="note">
            {props.outcome && (
              <div className="outcome">
                <span className="keyword">Call outcome: </span>
                {OUTCOME_LABELS[props.outcome]}
              </div>
            )}
            {props.note && <div>{props.note}</div>}
            {props.text && <div>{props.text}</div>}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default TimelineEntry;
