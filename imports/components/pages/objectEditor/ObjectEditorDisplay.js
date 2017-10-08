import React from 'react';
import { Link } from 'react-router-dom';

import ObjectEditor from '../../sections/objectEditor/ObjectEditor';
import SidebarHeader from '../../sections/sidebarHeader/SidebarHeader';
import PropertiesEditor from '../../sections/propertiesEditor/PropertiesEditor';
import InteractionMenu from '../../sections/interactionMenu/InteractionMenu';
import Timeline from '../../sections/timeline/Timeline';

const ObjectEditorDisplay = props => (
  <ObjectEditor {...props.parentPage}>
    <div className="body">
      <div className="sidebar">
        <SidebarHeader name={props.object.name} avatarPath={props.avatarPath} />
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

ObjectEditorDisplay.defaultProps = { object: {} };

export default ObjectEditorDisplay;
