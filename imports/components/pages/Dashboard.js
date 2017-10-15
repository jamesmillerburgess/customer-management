import React from 'react';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';

import Panel from '../fields/Panel';
import './Dashboard.scss';
import PageHeader from './PageHeader';
import TeamActivity from '../widgets/teamActivity/TeamActivity';

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
          <Panel title="Team Activity">
            <TeamActivity />
            {/* <div className="body-title">Work as a team</div>
            <div className="body-text">
              Gain insight into the tasks created, emails sent, calls placed,
              and meetings booked from your sales team. Create a task and you'll
              see it here.
            </div>
            <button className="button-neutral">Create a task</button> */}
          </Panel>
        </div>
        <div key={'b'} className="panel">
          <Panel title="Productivity">
            <div className="body-title">Spend less time on manual work</div>
            <div className="body-text">
              Make your sales process more efficient by turning your most used
              emails into reusable templates. Create a template and over time
              you'll see productivity rise.
            </div>
            <button className="button-neutral">Create a template</button>
          </Panel>
        </div>
        <div key={'c'} className="panel">
          <Panel title="Sales Performance" />
        </div>
        <div key={'d'} className="panel">
          <Panel title="Deal Forecast" />
        </div>
        <div key={'e'} className="panel">
          <Panel title="Deals Closed vs Goal" />
        </div>
      </GridLayout>
    </div>
  </div>
);

export default Dashboard;
