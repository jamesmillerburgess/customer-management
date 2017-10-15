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
    <div>
      <div className="body-title">Work as a team</div>
      <div className="body-text">
        Gain insight into the contacts, companies, and opportunities created,
        and the interaction with your sales team afterwards.
      </div>
    </div>
  );

export default TeamActivityDisplay;
