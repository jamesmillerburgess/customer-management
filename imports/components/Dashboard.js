import React from 'react';
import ReactGridLayout from 'react-grid-layout';

import './Dashboard.scss';
import SectionHeader from './sections/SectionHeader';

const headerProps = {
  title: 'Dashboard',
  search: 'Search for a report',
  add: 'Add report',
};

const Dashboard = () => (
  <div className="dashboard">
    <SectionHeader {...headerProps} />
    <div className="dashboard-grid">
      <ReactGridLayout
        layout={[
          { i: 'a', x: 0, y: 0, w: 1, h: 2 },
          { i: 'b', x: 1, y: 0, w: 1, h: 2 },
          { i: 'c', x: 0, y: 1, w: 1, h: 2 },
          { i: 'd', x: 1, y: 1, w: 1, h: 2 },
          { i: 'e', x: 0, y: 2, w: 1, h: 2 },
        ]}
        cols={2}
        rowHeight={225}
        width={1200}
        verticalCompact={false}
      >
        <div key={'a'} className="dashboard-panel">
          <div className="panel-inner">
            <div className="panel-header">
              <div className="panel-title">Team Activity</div>
              <div className="panel-menu">Actions</div>
            </div>
            <div className="panel-body">
              <div className="body-title">Work as a team</div>
              <div className="body-text">
                Gain insight into the tasks created, emails sent, calls placed,
                and meetings booked from your sales team. Create a task and
                you'll see it here.
              </div>
              <button className="button-neutral">Create a task</button>
            </div>
          </div>
        </div>
        <div key={'b'} className="dashboard-panel">
          <div className="panel-inner">
            <div className="panel-header">
              <div className="panel-title">Sales Performance</div>
              <div className="panel-menu">Actions</div>
            </div>
            <div className="panel-body" />
          </div>
        </div>
        <div key={'c'} className="dashboard-panel">
          <div className="panel-inner">
            <div className="panel-header">
              <div className="panel-title">Deal Forecast</div>
              <div className="panel-menu">Actions</div>
            </div>
            <div className="panel-body" />
          </div>
        </div>
        <div key={'d'} className="dashboard-panel">
          <div className="panel-inner">
            <div className="panel-header">
              <div className="panel-title">Deals Closed vs Goal</div>
              <div className="panel-menu">Actions</div>
            </div>
            <div className="panel-body" />
          </div>
        </div>
        <div key={'e'} className="dashboard-panel">
          <div className="panel-inner">
            <div className="panel-header">
              <div className="panel-title">Productivity</div>
              <div className="panel-menu">Actions</div>
            </div>
            <div className="panel-body">
              <div className="body-title">Spend less time on manual work</div>
              <div className="body-text">
                Make your sales process more efficient by turning your most used
                emails into reusable template. Create a template and over time
                you'll see productivity rise.
              </div>
              <button className="button-neutral">Create a template</button>
            </div>
          </div>
        </div>
      </ReactGridLayout>
    </div>
  </div>
);

export default Dashboard;
