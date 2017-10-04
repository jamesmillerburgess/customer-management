import React from 'react';
import { Link } from 'react-router-dom';

const ObjectEditor = props => (
  <div className="object-editor-wrapper">
    <div className="object-editor">
      <div className="header">
        <div className="left-arrow">&lt;&nbsp;</div>
        <Link to={props.path}>{props.label}</Link>
      </div>
      {props.children}
    </div>
  </div>
);

export default ObjectEditor;
