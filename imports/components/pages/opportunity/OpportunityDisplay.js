import React from 'react';
import { Link } from 'react-router-dom';

import { OPPORTUNITY_FIELDS } from './OpportunityConstants';
import ObjectEditor from '../../sections/objectEditor/ObjectEditor';
import StatusFlow from '../../sections/statusFlow/StatusFlow';
import PropertiesEditor from '../../sections/propertiesEditor/PropertiesEditor';
import InteractionMenu from '../../sections/InteractionMenu';
import Timeline from '../../sections/Timeline';

const OpportunityDisplay = props => (
  <ObjectEditor {...props.parentPage}>
    <StatusFlow
      statuses={props.statuses}
      status={props.opportunity.status}
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
        {/* <PropertiesEditor properties={companyProps} /> */}
      </div>
      <div className="content">
        {/* <InteractionMenu />
      <Timeline /> */}
      </div>
    </div>
  </ObjectEditor>
);

OpportunityDisplay.defaultProps = { company: {} };

export default OpportunityDisplay;
