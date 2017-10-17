import React from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Panel from '../fields/Panel';
import './Dashboard.scss';
import PageHeader from './PageHeader';
import TeamActivity from '../widgets/teamActivity/TeamActivity';
import OpportunityForecast from '../widgets/opportunityForecast/OpportunityForecast';

const GridLayout = WidthProvider(ReactGridLayout);

const headerProps = {
  title: 'Dashboard',
  searchPlaceholder: 'Search for a report',
  addButtonText: 'Add report',
};

const Dashboard = () => (
  <div className="dashboard">
    <PageHeader {...headerProps} />
    <div className="dashboard-grid">
      <GridLayout
        layout={[
          { i: 'a', x: 0, y: 0, w: 1, h: 1 },
          { i: 'b', x: 1, y: 0, w: 1, h: 1 },
          { i: 'c', x: 0, y: 1, w: 1, h: 1 },
          { i: 'd', x: 1, y: 1, w: 1, h: 1 },
          { i: 'e', x: 0, y: 2, w: 1, h: 1 },
        ]}
        cols={2}
        rowHeight={450}
        width={1200}
        compactType="vertical"
      >
        <div key={'a'} className="panel">
          <Panel title="Team Activity" subtitle={moment().format('MMMM YYYY')}>
            <TeamActivity />
          </Panel>
        </div>
        <div key={'b'} className="panel">
          <Panel
            title="Opportunity Forecast (USD)"
            subtitle={moment().format('MMMM YYYY')}
          >
            <OpportunityForecast />
          </Panel>
        </div>
      </GridLayout>
    </div>
  </div>
);

export default Dashboard;
