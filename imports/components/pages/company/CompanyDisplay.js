import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { COMPANY_FIELDS } from './CompanyConnect';

const CompanyDisplay = props => (
  <div className="object-editor-wrapper">
    <div className="object-editor">
      <div className="header">
        <div className="left-arrow">&lt;&nbsp;</div>
        <Link to="/companies">Companies</Link>
      </div>
      <div className="body">
        <div className="sidebar">
          <div className="panel sidebar-header">
            <img className="avatar" src="/empty-company-pic.png" />
            <div className="title">{props.company.name}</div>
          </div>
          <div className="panel sidebar-properties">
            <div className="title">About {props.company.name}</div>
            {COMPANY_FIELDS.map(field => (
              <div className="input-group">
                <div className="input-label">{field.label}</div>
                <input
                  value={props[field.property]}
                  onChange={e =>
                    props.setProperty(field.property, e.target.value)}
                />
              </div>
            ))}
            <div
              className={`button-group ${props.isEditingCompany
                ? 'expanded'
                : 'expandable'}`}
              style={{
                height: props.isEditingCompany ? '43px' : '0px',
                opacity: props.isEditingCompany ? '1' : '0',
              }}
            >
              <button
                className="button-primary"
                onClick={() =>
                  props.saveCompany({
                    name: props.name,
                    website: props.website,
                  })}
              >
                Save
              </button>
              <button
                className="button-secondary"
                onClick={props.cancelEditCompany}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="panel">
            <div className="interaction-menu">
              <div className="interaction-item active">
                <div className="fa fa-fw fa-pencil icon" />
                New note
              </div>
              {/* <div className="interaction-item">
                <div className="fa fa-fw fa-plus icon" />
                Log activity
              </div>
              <div className="interaction-item">
                <div className="fa fa-fw fa-calendar-plus-o icon" />Create task
              </div> */}
            </div>
            <textarea
              value={props.note}
              onChange={e => props.setNote(e.target.value)}
              placeholder="Start typing to leave a note..."
            />
            <div
              className={`button-group ${props.isWritingNote
                ? 'expanded'
                : 'expandable'}`}
              style={{
                height: props.isWritingNote ? '43px' : '0px',
                opacity: props.isWritingNote ? '1' : '0',
              }}
            >
              <button
                className="button-primary"
                onClick={() => props.addNote(props.note)}
              >
                Save note
              </button>
              <button className="button-secondary" onClick={props.cancelNote}>
                Cancel
              </button>
            </div>
          </div>
          <div className="timeline">
            {props.company.timeline.reverse().map(entry => (
              <div className="timeline-entry" key={entry.id}>
                <div className="timeline-icon">
                  {entry.type === 'NOTE' ? (
                    <div className="fa fa-fw fa-pencil" />
                  ) : null}
                  {entry.type === 'CREATION' ? (
                    <div className="fa fa-fw fa-plus" />
                  ) : null}
                </div>
                <div className="timeline-details panel">
                  <img
                    className="timeline-avatar"
                    src={
                      entry.type === 'CREATION' ? (
                        '/empty-company-pic.png'
                      ) : (
                        '/empty-profile-pic.png'
                      )
                    }
                  />
                  <div className="timeline-details-body">
                    {entry.type === 'NOTE' ? (
                      <div className="timeline-message">
                        <span className="keyword">{entry.username}</span> left a
                        note
                      </div>
                    ) : (
                      <div className="timeline-message">
                        <span className="keyword">
                          {props.company.name}
                        </span>{' '}
                        was created
                      </div>
                    )}
                    <div className="timestamp">
                      {moment(entry.timestamp).format('MMMM Do [at] h:mm a')}
                    </div>
                    {entry.type === 'NOTE' ? (
                      <div className="note">{entry.note}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyDisplay;
