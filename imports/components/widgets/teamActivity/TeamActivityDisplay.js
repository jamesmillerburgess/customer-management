import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { I18n } from 'react-redux-i18n';

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
            key={item._id}
            {...item}
            isNotLast={index !== props.activity.length - 1}
          />
        ))}
      </ReactCSSTransitionGroup>
    </div>
  ) : (
    <WidgetPlaceholder
      title={I18n.t('teamActivity.placeholderTitle')}
      text={[
        I18n.t('teamActivity.placeholderText.0'),
        I18n.t('teamActivity.placeholderText.1'),
        I18n.t('teamActivity.placeholderText.2'),
      ]}
      buttonText={I18n.t('teamActivity.placeholderButtonText')}
      buttonPath="/profile/basic-info"
    />
  );

export default TeamActivityDisplay;
