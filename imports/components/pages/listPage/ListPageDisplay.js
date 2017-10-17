import React from 'react';
import { Route } from 'react-router-dom';

import PageHeader from '../PageHeader';
import GridPage from '../GridPage';

const ListPageDisplay = props => (
  <Route
    path={props.path}
    exact
    render={() => (
      <div>
        <PageHeader
          title={props.title}
          searchPlaceholder={props.searchPlaceholder}
          addButtonText={props.addButtonText}
          onClickAdd={props.openOverlay}
        />
        <GridPage
          {...props.gridPageProps(props.items)}
          data={props.loading ? [] : props.items}
          match={props.match}
        />
      </div>
    )}
  />
);

ListPageDisplay.defaultProps = { items: [] };

export default ListPageDisplay;
