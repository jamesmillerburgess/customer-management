import React from 'react';
import { Meteor } from 'meteor/meteor';
import deepEqual from 'deep-equal';

import OptionField from '../optionField/OptionField';
import { buildSearchRegExp } from '../../../api/methodUtils';

export const filterOption = () => true;

export const optionRenderer = option => (
  <div className="company-value">
    <div className="value">{option.name}</div>
  </div>
);

// Filter for old results which are not being passed through a Meteor Method
export const filterBySearch = (options, inputValue) => {
  const exp = buildSearchRegExp(inputValue);
  return options.filter(opt => exp.test(opt.name));
};

class AsyncOptionField extends React.Component {
  constructor(props) {
    super(props);
    this.mergeResults = this.mergeResults.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleServerResults = this.handleServerResults.bind(this);
    this.getClientAndServerResults = this.getClientAndServerResults.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.state = { options: [] };
  }

  onOpen() {
    const inputValue = '';
    const syncOptions = this.getOptions(inputValue, asyncOptions => {
      this.setState({ options: asyncOptions });
    });
    this.setState({ options: syncOptions, inputValue });
  }

  // Combine two sets of results to remove duplicates and maintain the first set
  // as coming first in the sequence
  mergeResults(a, b) {
    const additional = b.filter(
      bItem =>
        !a.reduce((prev, aItem) => prev || aItem._id === bItem._id, false)
    );
    const mergedResults = [...a, ...additional];

    // Insert the clear option if applicable and missing
    if (
      this.props.clearOption &&
      ((mergedResults[0] && mergedResults[0]._id !== '') || !mergedResults[0])
    ) {
      mergedResults.unshift({ _id: '', name: this.props.clearOption });
    }

    // Limit to ten results
    return mergedResults.slice(0, 10);
  }

  // Call the search method on both client and server. Client results come in the
  // return value and server results are passed into the callback.
  getClientAndServerResults(inputValue, cb) {
    return Meteor.apply(
      this.props.searchMethod,
      [inputValue],
      { returnStubValue: true },
      (err, res) => this.handleServerResults(err, res, cb)
    );
  }

  // Handle server results
  handleServerResults(err, res, cb) {
    if (err) {
      console.log(err);
    }

    // Only update the results if this is for the most current search. It could
    // be results for an old search if the user is typing sufficiently quickly
    // and the connection is sufficiently slow.
    if (res.searchText === this.state.inputValue) {
      cb(this.mergeResults(this.state.options, res.searchResults));
    }
  }

  getOptions(inputValue, cb) {
    // Apply newest inputValue as a filter to the last set of results
    const lastResults = filterBySearch(this.state.options, inputValue);

    // Get the results for both the client and the server
    const clientResults = this.getClientAndServerResults(inputValue, cb)
      .searchResults;

    // Merge the client results into the filtered results from the last
    // search. This is synchronous, and so it will run before the server
    // results are returned and merged.
    return this.mergeResults(lastResults, clientResults);
  }

  // Since we don't know which companies might be subscribed to on the client,
  // we can include the last set of results in our client search, as they may
  // have come from the server. This will ensure instant results in many cases
  // and then additional results will come once the server call has completed
  // the round trip.
  // Possible Improvements:
  //    1) Throttle searches
  //    2) Cache searches(?)
  //    3) Load results on mount
  onInputChange(inputValue) {
    const syncOptions = this.getOptions(inputValue, asyncOptions => {
      this.setState({ options: asyncOptions });
    });

    this.setState({ options: syncOptions, inputValue });
  }

  render() {
    return (
      <OptionField
        {...this.props}
        valueKey="_id"
        options={this.state.options}
        optionRenderer={optionRenderer}
        valueRenderer={optionRenderer}
        onInputChange={this.onInputChange}
        filterOption={filterOption}
        onOpen={this.onOpen}
      />
    );
  }
}

export default AsyncOptionField;
