import React from 'react';
import moment from 'moment';

const TIMELINE_MESSAGES = {
  CREATION: 'was created',
  NOTE: 'left a note',
};

const TIMELINE_ICONS = {
  CREATION: 'fa-pencil',
  NOTE: 'fa-plus',
};

const TIMELINE_AVATARS = {
  CREATION: '/empty-company-pic.png',
  NOTE: '/empty-profile-pic.png',
};

const Timeline = props => (
  <div className="timeline">
    <div className="timeline-entry">
      <div className="timeline-icon-container">
        <div className="timeline-icon-pre-line first" />
      </div>
    </div>
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
          <img className="timeline-avatar" src={TIMELINE_AVATARS[entry.type]} />
          <div className="timeline-details-body">
            <div className="timeline-message">
              <span className="keyword">{entry.keyword}</span>{' '}
              {TIMELINE_MESSAGES[entry.type]}
            </div>
            <div className="timestamp">
              {moment(entry.timestamp).format('MMMM Do [at] h:mm a')}
            </div>
            {entry.note ? <div className="note">{entry.note}</div> : null}
          </div>
        </div>
      </div>
    ))}
  </div>
);

Timeline.defaultProps = { timeline: [] };

export default Timeline;