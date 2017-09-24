import React from 'react';
import { Link } from 'react-router-dom';

const CompanyDisplay = props => (
  <div className="object-editor">
    <div className="header">
      <div className="left-arrow">&lt;&nbsp;</div>
      <Link to="/companies">Companies</Link>
    </div>
    <div className="body">
      <div className="sidebar">
        <div className="panel">
          <div className="title">{props.company.name}</div>
        </div>
        <div className="panel">
          <div className="input-group">
            <div className="input-label">Name</div>
            <input value={props.company.name} />
          </div>
          <div className="input-group">
            <div className="input-label">Website</div>
            <input value={props.company.website} />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="panel">New note</div>
      </div>
    </div>
  </div>
);

export default CompanyDisplay;
