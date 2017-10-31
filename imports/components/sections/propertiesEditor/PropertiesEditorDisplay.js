import React from 'react';
import { Translate } from 'react-redux-i18n';

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
    <div className="title">
      <Translate
        value="editProperties.aboutText"
        name={props.loadedValues.name}
      />
    </div>
    {props.fields.map(field => (
      <div className="input-group" key={field.name}>
        <div className="input-label">
          <Translate value={field.label} />
        </div>
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
          <Translate value="editProperties.saveButtonText" />
        </button>
        <button className="button-secondary" onClick={props.cancelEdit}>
          <Translate value="editProperties.cancelButtonText" />
        </button>
        <div className="edited-properties">
          {props.numEditedProperties === 1 ? (
            <Translate value="editProperties.singularPropertiesChangedText" />
          ) : (
            <Translate
              value="editProperties.pluralPropertiesChangedText"
              numEditedProperties={props.numEditedProperties}
            />
          )}
        </div>
      </div>
    </div>
  </form>
);

export default PropertiesEditorDisplay;
