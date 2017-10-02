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
    <OpportunityHeader opportunity={props.opportunity} />
    <StatusFlow
      statuses={props.statuses}
      status={props.opportunity.status}
      statusIndex={props.statusIndex}
      updateStatusMethod={props.updateStatusMethod}
      uriID={props.uriID}
    />
    <div className="body">
      <div className="sidebar">
        <PropertiesEditor
          properties={props.properties}
          setProperty={props.setProperty}
          loadedValues={props.opportunity}
          savePropertiesMethod={props.savePropertiesMethod}
          uriID={props.uriID}
        />
        {props.companyProps ? (
          <PropertiesEditor properties={props.companyProps} />
        ) : null}
      </div>
      <div className="content">
        <InteractionMenu
          addNoteMethod={props.addNoteMethod}
          uriID={props.uriID}
        />
        <Timeline timeline={props.opportunity.timeline} />
      </div>
    </div>
  </ObjectEditor>
);

OpportunityDisplay.defaultProps = { company: {} };

export default OpportunityDisplay;