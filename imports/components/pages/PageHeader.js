import React from 'react';
import SearchInput from '../fields/SearchInput';
import './PageHeader.scss';

const PageHeader = props => (
  <section className="page-header">
    <div className="header-content">
      <div className="header-title">
        <h1>{props.title}</h1>
      </div>
      {props.hideButtons ? null : (
        <div className="button-group">
          <SearchInput placeholder={props.search} />
          <button className="button-secondary">Customize</button>
          <button className="button-secondary">Import</button>
          <button className="button-primary" onClick={props.onClickAdd}>
            {props.add}
          </button>
        </div>
      )}
    </div>
  </section>
);

export default PageHeader;
