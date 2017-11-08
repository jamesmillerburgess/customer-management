import React from 'react';
import { Translate } from 'react-redux-i18n';
import Field from '../../fields/field/Field';

export const FieldComponent = props => (
  <Field
    {...props.field}
    onChange={val => props.setProp(props.field.name, val)}
  />
);

class FieldList extends React.Component {
  render() {
    return this.props.fields.map(field => (
      <div className="input-group" key={field.name}>
        <div className="input-label">
          <Translate value={field.label} />
        </div>
        <FieldComponent field={field} setProp={this.setProp} />
      </div>
    ));
  }
}

export default FieldList;
