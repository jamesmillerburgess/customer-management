import React from 'react';
import Field from '../../fields/field/Field';

const PropertiesEditorDisplay = props => (
  <form
    className="panel sidebar-properties"
    onSubmit={e => {
      e.preventDefault();
      props.save(
        props.properties.reduce(
          (prev, property) => ({
            ...prev,
            [property.name]: props[property.name],
          }),
          {}
        )
      );
    }}
  >
    <div className="title">About {props.loadedValues.name}</div>
    {props.properties.map(property => (
      <div className="input-group" key={property.name}>
        <div className="input-label">{property.label}</div>
        <Field
          fieldType={property.fieldType}
          id={property.name}
          value={props[property.name]}
          onChange={value => props.setProperty(property.name, value)}
        />
      </div>
    ))}
    <div
      className={`button-footer ${props.isEditingProperties
        ? 'expanded'
        : 'expandable'}`}
      style={{
        height: props.isEditingProperties ? '90px' : '0px',
      }}
    >
      <div className="button-group">
        <button className="button-primary" type="submit">
          Save
        </button>
        <button className="button-secondary" onClick={props.cancelEdit}>
          Cancel
        </button>
        <div className="edited-properties">
          You've changed {props.numEditedProperties}{' '}
          {props.numEditedProperties === 1 ? 'property' : 'properties'}
        </div>
      </div>
    </div>
  </form>
);

export default PropertiesEditorDisplay;
