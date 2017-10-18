import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';

import OptionField from '../optionField/OptionField';
import Companies from '../../../api/company/companyCollection';
import { buildSearchRegExp } from '../../../api/methodUtils';

export const optionRenderer = option => (
  <div className="company-value">
    <div className="value">{option.name}</div>
  </div>
);

// Filter for old results which are not being passed through a Meteor Method
const filterBySearch = (options, inputValue) => {
  const exp = buildSearchRegExp(inputValue);
  return options.filter(opt => exp.test(opt.name));
};

// Call the search method on both client and server. Client results come in the
// return value and server results are passed into the callback.
const getClientAndServerResults = (inputValue, cb) =>
  Meteor.apply('company.search', [inputValue], { returnStubValue: true }, cb);

// Combine two sets of results to remove duplicates and maintain the first set
// as coming first in the sequence
const mergeResults = (a, b) => {
  const additional = b.filter(
    bItem => !a.reduce((prev, aItem) => prev || aItem._id === bItem._id, false)
  );

  // Limit to ten results
  return [...a, ...additional].slice(0, 10);
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
    this.handleServerResults = this.handleServerResults.bind(this);
  }

  // Handle server results
  handleServerResults(err, res) {
    if (err) {
      console.log(err);
    }

    // Only update the results if this is for the most current search. It could
    // be results for an old search if the user is typing sufficiently quickly
    // and the connection is sufficiently slow.
    if (res.searchText === this.state.inputValue) {
      this.setState({
        // Merge results to preserve the order of the client results and only
        // extend the list as needed
        options: mergeResults(this.state.options, res.searchResults),
      });
    }
  }

  // Since we don't know which companies might be subscribed to on the client,
  // we can include the last set of results in our client search, as they may
  // have come from the server. This will ensure instant results in many cases
  // and then additional results will come once the server call has completed
  // the round trip.
  // Possible Improvements:
  //    TODO: 1) Throttle searches
  //    TODO: 2) Cache searches(?)
  onInputChange(inputValue) {
    // Apply newest inputValue as a filter to the last set of results
    const lastResults = filterBySearch(this.state.options, inputValue);

    // Get the results for both the client and the server
    const clientResults = getClientAndServerResults(
      inputValue,
      this.handleServerResults
    ).searchResults;

    // Merge the client results into the filtered results from the last
    // search. This is synchronous, and so it will run before the server
    // results are returned and merged.
    this.setState({
      options: mergeResults(lastResults, clientResults),
      inputValue,
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
