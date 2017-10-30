import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Translate, Localize } from 'react-redux-i18n';

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
    <Translate
      value="timeline.statusChange.0"
      username={props.username || ''}
    />
    <Link to={`/opportunities/${props.opportunityId}`} className="keyword">
      {props.opportunityName}
    </Link>
    <Translate value="timeline.statusChange.1" />
  </span>
);

export const TIMELINE_MESSAGES = {
  CREATION: props => (
    <span>
      <Translate value="timeline.creation.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.creation.1" />
    </span>
  ),
  NOTE: props => (
    <span>
      <Translate value="timeline.note.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.note.1" />
    </span>
  ),
  CALL: props => (
    <span>
      <Translate value="timeline.call.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.call.1" />
    </span>
  ),
  EMAIL: props => (
    <span>
      <Translate value="timeline.email.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.email.1" />
    </span>
  ),
  MEETING: props => (
    <span>
      <Translate value="timeline.meeting.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.meeting.1" />
    </span>
  ),
  QUOTE: props => (
    <span>
      <Translate value="timeline.quote.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.quote.1" />
    </span>
  ),
  STATUS_CHANGE_FORWARD: props => StatusChangeMessage(props, 'forward'),
  STATUS_CHANGE_BACKWARD: props => StatusChangeMessage(props, 'backward'),
  JOIN_TEAM: props => (
    <span>
      <Translate value="timeline.joinTeam.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.joinTeam.1" />
    </span>
  ),
  LEAVE_TEAM: props => (
    <span>
      <Translate value="timeline.leaveTeam.0" username={props.username || ''} />
      <Link to={`/${props.parentCollection}/${props.parent}`}>
        {props.parentName}
      </Link>
      <Translate value="timeline.leaveTeam.1" />
    </span>
  ),
};

const TIMELINE_ICONS = {
  CREATION: 'fa-plus',
  NOTE: 'fa-pencil',
  CALL: 'fa-phone',
  EMAIL: 'fa-envelope',
  MEETING: 'fa-handshake-o',
  QUOTE: 'fa-file-text-o',
  STATUS_CHANGE_FORWARD: 'fa-angle-double-right',
  STATUS_CHANGE_BACKWARD: 'fa-angle-double-left',
  JOIN_TEAM: 'fa-plus',
  LEAVE_TEAM: 'fa-minus',
};

const TIMELINE_AVATARS = {
  CREATION: '/empty-company-pic.png',
  NOTE: '/empty-profile-pic.png',
  CALL: '/empty-profile-pic.png',
  EMAIL: '/empty-profile-pic.png',
  MEETING: '/empty-profile-pic.png',
  QUOTE: '/empty-profile-pic.png',
  STATUS_CHANGE_FORWARD: '/empty-profile-pic.png',
  STATUS_CHANGE_BACKWARD: '/empty-profile-pic.png',
  JOIN_TEAM: '/empty-profile-pic.png',
  LEAVE_TEAM: '/empty-profile-pic.png',
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
          {TIMELINE_MESSAGES[props.type](props)}
        </div>
        <div className="timestamp">
          <Localize
            value={props.time || props.timestamp}
            dateFormat="timeline.dateFormat"
          />
        </div>
        {(props.outcome || props.note || props.text || props.to) && (
          <div className="note">
            {props.outcome && (
              <div className="outcome">
                <Translate value="timeline.callOutcome" />:{' '}
                <span className="keyword">
                  <Translate value={`callOutcomes.${props.outcome}`} />
                </span>
              </div>
            )}
            {props.quoteNumber && (
              <div className="outcome">
                <Translate value="timeline.quoteNumber" />:{' '}
                <span>
                  <a
                    href={`https://focis.agility.com/QuotationPrints/${props.quoteNumber}-v1.pdf`}
                    target="_blank"
                    className="keyword"
                  >
                    {props.quoteNumber}
                  </a>
                </span>
              </div>
            )}
            {props.to && (
              <div className="outcome">
                <Translate value="timeline.newStatus" />:{' '}
                <span className="keyword">
                  <Translate value={`opportunityStatuses.${props.to}`} />
                </span>
              </div>
            )}
            {props.note && <div className="text">{props.note}</div>}
            {props.text && <div className="text">{props.text}</div>}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default TimelineEntry;
