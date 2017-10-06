import React from 'react';
import { Link } from 'react-router-dom';

import ObjectEditor from '../../sections/objectEditor/ObjectEditor';
import PropertiesEditor from '../../sections/propertiesEditor/PropertiesEditor';
import InteractionMenu from '../../sections/interactionMenu/InteractionMenu';
import Timeline from '../../sections/timeline/Timeline';

const ContactDisplay = props => (
  <ObjectEditor {...props.parentPage}>
    <div className="body">
      <div className="sidebar">
        <div className="panel sidebar-header">
          <img className="avatar" src="/empty-profile-pic.png" />
          <div className="title">{props.object.name}</div>
        </div>
        <PropertiesEditor
          properties={props.properties}
          setProperty={props.setProperty}
          loadedValues={props.object}
          savePropertiesMethod={props.savePropertiesMethod}
          uriID={props.uriID}
        />
      </div>
      <div className="content">
        <InteractionMenu {...props} />
        <Timeline timeline={props.object.timeline} />
      </div>
    </div>
  </ObjectEditor>
);

ContactDisplay.defaultProps = { object: {} };

export default ContactDisplay;
