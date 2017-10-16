import React from 'react';

import TimelineEntry from '../../sections/timelineEntry/TimelineEntry';

const TeamActivityDisplay = props =>
  props.activity.length > 0 ? (
    <div className="team-activity">
      <div className="timeline-entry">
        <div className="timeline-icon-container">
          <div className="timeline-icon-pre-line first" />
        </div>
      </div>
      {props.activity.map((item, index) => (
        <TimelineEntry
          key={item.id}
          {...item}
          isNotLast={index !== props.activity.length - 1}
        />
      ))}
    </div>
  ) : (
    <div style={{ width: '100%' }}>
      <div className="body-title">Work as a team</div>
      <div className="body-text">
        Gain insight into the contacts, companies, and opportunities created,
        and the interaction with your sales team afterwards. Once there has been
        some activity by you or someone on your team, it will display in this
        widget.
      </div>
    </div>
  );

export default TeamActivityDisplay;
