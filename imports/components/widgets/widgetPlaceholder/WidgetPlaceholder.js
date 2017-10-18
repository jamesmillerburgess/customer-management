import React from 'react';
import { Link } from 'react-router-dom';

const WidgetPlaceholder = props => (
  <div style={{ width: '100%' }}>
    <div className="body-title">{props.title}</div>
    <div className="body-text">
      {props.text.map(line => (
        <div className="body-text-line" key={line}>
          {line}
        </div>
      ))}
      <Link to={props.buttonPath}>
        <button className="button-secondary">{props.buttonText}</button>
      </Link>
    </div>
  </div>
);

export default WidgetPlaceholder;
