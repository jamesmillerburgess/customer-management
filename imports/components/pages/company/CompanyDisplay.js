import React from 'react';
import { Link } from 'react-router-dom';

import { COMPANY_FIELDS } from './CompanyConstants';
import Timeline from '../../sections/Timeline';

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
              <div className="input-group" key={field.property}>
                <div className="input-label">{field.label}</div>
                <input
                  value={props[field.property]}
                  onChange={e =>
                    props.setProperty(field.property, e.target.value)}
                />
              </div>
            ))}
            <div
              className={`button-footer ${props.isEditingCompany
                ? 'expanded'
                : 'expandable'}`}
              style={{
                height: props.isEditingCompany ? '90px' : '0px',
              }}
            >
              <div className="button-group">
                <button
                  className="button-primary"
                  onClick={() =>
                    props.saveCompany(
                      COMPANY_FIELDS.reduce(
                        (prev, field) => ({
                          ...prev,
                          [field.property]: props[field.property],
                        }),
                        {}
                      )
                    )}
                >
                  Save
                </button>
                <button
                  className="button-secondary"
                  onClick={props.cancelEditCompany}
                >
                  Cancel
                </button>
                <div className="edited-properties">
                  You've changed {props.numEditedProperties} company{' '}
                  {props.numEditedProperties === 1 ? 'property' : 'properties'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="panel menu-panel">
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
                style={props.isWritingNote ? {} : { cursor: 'auto' }}
                onClick={
                  props.isWritingNote ? () => props.addNote(props.note) : null
                }
              >
                Save note
              </button>
              <button
                className="button-secondary"
                style={props.isWritingNote ? {} : { cursor: 'auto' }}
                onClick={props.isWritingNote ? props.cancelNote : null}
              >
                Cancel
              </button>
            </div>
          </div>
          <Timeline timeline={props.company.timeline} />
        </div>
      </div>
    </div>
  </div>
);

CompanyDisplay.defaultProps = { company: {} };

export default CompanyDisplay;
