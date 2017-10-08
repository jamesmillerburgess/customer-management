import React from 'react';
import Field from '../../fields/field/Field';

const PropertiesEditorDisplay = props => (
  <form
    className="panel sidebar-properties"
    onSubmit={e => {
      e.preventDefault();
      props.save(
        props.fields.reduce(
          (prev, field) => ({
            ...prev,
            [field.name]: field.value,
          }),
          {}
        )
      );
    }}
  >
    <div className="title">About {props.loadedValues.name}</div>
    {props.fields.map(field => (
      <div className="input-group" key={field.name}>
        <div className="input-label">{field.label}</div>
        <Field
          id={field.name}
          {...field}
          onChange={value => props.setProperty(field.name, value)}
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
