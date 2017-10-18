import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TimelineEntry from '../../sections/timelineEntry/TimelineEntry';
import WidgetPlaceholder from '../widgetPlaceholder/WidgetPlaceholder';

const TeamActivityDisplay = props =>
  props.showWidget ? (
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
    <WidgetPlaceholder
      title="Work as a team"
      text={[
        'Gain insight into the contacts, companies, and opportunities \n' +
          'created, and the interaction with your sales team afterwards.',
        'Once there has been some activity by you or someone on your team,\n' +
          'it will display in this widget.',
        "If you don't have a team yet, you can add one from your profile page.",
      ]}
      buttonText="Go to profile"
      buttonPath="/profile/basic-info"
    />
  );

export default TeamActivityDisplay;
