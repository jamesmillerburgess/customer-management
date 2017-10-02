import React from 'react';
import { Link } from 'react-router-dom';

import { OPPORTUNITY_FIELDS } from './OpportunityConstants';
import ObjectEditor from '../../sections/objectEditor/ObjectEditor';
import OpportunityHeader from './OpportunityHeader';
import StatusFlow from '../../sections/statusFlow/StatusFlow';
import PropertiesEditor from '../../sections/propertiesEditor/PropertiesEditor';
import InteractionMenu from '../../sections/interactionMenu/InteractionMenu';
import Timeline from '../../sections/timeline/Timeline';

const OpportunityDisplay = props => (
  <ObjectEditor {...props.parentPage}>
    <OpportunityHeader opportunity={props.object} />
    <StatusFlow
      statuses={props.statuses}
      status={props.object.status}
      statusIndex={props.statusIndex}
      updateStatusMethod={props.updateStatusMethod}
      uriID={props.uriID}
    />
    <div className="body">
      <div className="sidebar">
        <PropertiesEditor
          properties={props.properties}
          setProperty={props.setProperty}
          loadedValues={props.object}
          savePropertiesMethod={props.savePropertiesMethod}
          uriID={props.uriID}
        />
      </div>
      <div className="content">
        <InteractionMenu
          addNoteMethod={props.addNoteMethod}
          uriID={props.uriID}
        />
        <Timeline timeline={props.object.timeline} />
      </div>
    </div>
  </ObjectEditor>
);

OpportunityDisplay.defaultProps = { object: {} };

export default OpportunityDisplay;
