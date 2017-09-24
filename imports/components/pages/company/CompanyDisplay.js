import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
          <div className="title">About {props.company.name}</div>
          <div className="input-group">
            <div className="input-label">Name</div>
            <input value={props.company.name} />
          </div>
          <div className="input-group">
            <div className="input-label">Website</div>
            <input value={props.company.website} />
          </div>
          <div className="button-group">
            <button className="button-primary">Save</button>
            <button className="button-secondary">Cancel</button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="panel">New note</div>
        <div className="timeline">
          {props.company.timeline.map(entry => (
            <div className="timeline-entry" key={entry.id}>
              <div className="timeline-icon">+</div>
              <div className="timeline-details panel">
                <img className="timeline-avatar" src="/empty-company-pic.png" />
                <div className="timeline-details-body">
                  <div className="timeline-message">
                    <span className="keyword">{props.company.name}</span> was
                    created
                  </div>
                  <div className="timestamp">
                    {moment(entry.timestamp).format('MMMM Do [at] h:mm a')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CompanyDisplay;