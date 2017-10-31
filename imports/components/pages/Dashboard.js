import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Translate, Localize } from 'react-redux-i18n';

import Panel from '../fields/Panel';
import './Dashboard.scss';
import PageHeader from './PageHeader';
import TeamActivity from '../widgets/teamActivity/TeamActivity';
import OpportunityForecast from '../widgets/opportunityForecast/OpportunityForecast';

const GridLayout = WidthProvider(Responsive);

const headerProps = {
  title: <Translate value="dashboard.title" />,
  searchPlaceholder: <Translate value="dashboard.searchPlaceholder" />,
  addButtonText: <Translate value="dashboard.addReport" />,
};

const Dashboard = () => (
  <div className="dashboard">
    <PageHeader {...headerProps} />
    <div className="dashboard-grid">
      <GridLayout
        breakpoints={{ lg: 750, md: 0 }}
        cols={{ lg: 2, md: 1 }}
        layouts={{
          lg: [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 1, y: 0, w: 1, h: 1 },
          ],
          md: [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 0, y: 1, w: 1, h: 1 },
          ],
        }}
        rowHeight={450}
        width={1200}
        compactType="vertical"
        draggableCancel=".panel-body"
      >
        <div key={'a'} className="panel">
          <Panel
            title={<Translate value="dashboard.teamActivity" />}
            subtitle={
              <Localize
                value={moment().format()}
                dateFormat="dashboard.dateFormat"
              />
            }
          >
            <TeamActivity />
          </Panel>
        </div>
        <div key={'b'} className="panel">
          <Panel
            title={<Translate value="dashboard.opportunityForecast" />}
            subtitle={
              <Localize
                value={moment().format()}
                dateFormat="dashboard.dateFormat"
              />
            }
          >
            <OpportunityForecast />
          </Panel>
        </div>
      </GridLayout>
    </div>
  </div>
);

export default Dashboard;
