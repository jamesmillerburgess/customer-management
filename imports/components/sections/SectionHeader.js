import React from 'react';
import SearchInput from '../fields/SearchInput';
import './SectionHeader.scss';

const SectionHeader = props => (
  <section className="section-header">
    <div className="header-content">
      <div className="header-title">
        <h1>{props.title}</h1>
      </div>
      <div className="button-group">
        <SearchInput placeholder={props.search} />
        <button className="button-secondary">Customize</button>
        <button className="button-secondary">Import</button>
        <button className="button-primary">{props.add}</button>
      </div>
    </div>
  </section>
);

export default SectionHeader;
