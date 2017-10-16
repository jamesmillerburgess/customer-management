import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TimelineEntry from '../../sections/timelineEntry/TimelineEntry';

const TeamActivityDisplay = props =>
  props.activity.length > 0 ? (
    <div className="team-activity">
      <ReactCSSTransitionGroup
        transitionName="timeline-entry"
        transitionAppear={false}
        transitionEnterTimeout={500}
        transitionEnter={true}
        transitionLeave={false}
      >
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
      </ReactCSSTransitionGroup>
    </div>
  ) : (
    <div style={{ width: '100%' }}>
      <div className="body-title">Work as a team</div>
      <div className="body-text">
        Gain insight into the contacts, companies, and opportunities created,
        and the interaction with your sales team afterwards.
        <br />
        <br />
        Once there has been some activity by you or someone on your team, it
        will display in this widget.
        <br />
        <br />
        If you don't have a team yet, you can add one from your profile page.
        <br />
        <br />
        <Link to="/profile/basic-info">
          <button className="button-secondary">Go to profile</button>
        </Link>
      </div>
    </div>
  );

export default TeamActivityDisplay;
