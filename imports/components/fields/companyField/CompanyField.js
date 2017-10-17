import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';

import OptionField from '../optionField/OptionField';
import Companies from '../../../api/company/companyCollection';
import { buildSearchRegExp } from '../../../api/methodUtils';

export const optionRenderer = stakeholder => (
  <div className="company-value">
    <div className="value">{stakeholder.name}</div>
  </div>
);

export const loadOptions = (search, cb) => {
  const query = { name: { $regex: buildSearchRegExp(search) } };
  const options = { fields: { _id: 1, name: 1, members: 1 }, limit: 10 };
  cb(null, Companies.find(query, options).fetch());
  const res = Meteor.call('company.search', search, (err, options) => {
    if (err) {
      console.log(err);
    }
    cb(null, { options });
  });
};

const getClientResults = inputValue => {
  const query = { name: { $regex: buildSearchRegExp(inputValue) } };
  const options = { fields: { _id: 1, name: 1, members: 1 }, limit: 10 };
  return Companies.find(query, options).fetch();
};

const getServerResults = (inputValue, cb) =>
  Meteor.call('company.search', inputValue, cb);

const mergeResults = (a, b) => {
  const additional = b.filter(
    bItem => !a.reduce((prev, aItem) => prev || aItem._id === bItem._id, false)
  );
  return [...a, ...additional];
};

class CompanyField extends React.Component {
  constructor(props) {
    super(props);
    if (props.value) {
      this.state = { options: [props.value] };
    } else {
      this.state = { options: [] };
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(inputValue) {
    // Since we don't know which companies might be subscribed to on the client,
    // we can include the last set of results in our client search, as they may
    // have come from the server. This will ensure instant results in many cases
    // and then additional results will come once the server call has completed
    // the round trip.
    // Possible Improvements:
    //    1) Ensure option order doesn't change once server results come in
    //    2) Limit merged results to 10 for consistency

    // Client results and application
    const lastResults = this.state.options;
    const clientResults = getClientResults(inputValue);
    this.setState({ options: mergeResults(lastResults, clientResults) });

    // Server results and application
    getServerResults(inputValue, (err, serverResults) => {
      if (err) {
        console.log(err);
      }
      this.setState({ options: serverResults });
    });
  }

  render() {
    return (
      <div className="company-field">
        <OptionField
          {...this.props}
          valueKey="_id"
          options={this.state.options}
          optionRenderer={optionRenderer}
          valueRenderer={optionRenderer}
          onInputChange={this.onInputChange}
          filterOption={() => true}
        />
        {this.props.value ? (
          <button
            className="icon fa fa-fw fa-building-o"
            onClick={e => {
              e.preventDefault();
              // An older version stored the company as an object with an _id prop.
              // Later we should be able to update the database and remove this
              // condition.
              this.props.history.push(
                `/companies/${this.props.value._id || this.props.value}`
              );
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(CompanyField);
