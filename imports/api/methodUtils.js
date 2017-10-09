import { Meteor } from 'meteor/meteor';

export const isoError = (error, reason, details) => {
  const meteorError = new Meteor.Error(error, reason, details);
  if (Meteor.isClient) {
    return meteorError;
  } else if (Meteor.isServer) {
    throw meteorError;
  }
};

export const escapeRegExp = text =>
  text.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

export const buildSearchRegExp = (search = '') => {
  if (typeof search !== 'string') {
    throw new Error(`Expected string, but got ${search.typeof}`);
  }
  const escapedSearch = escapeRegExp(search);
  const parts = escapedSearch.split(/ +/);
  let pattern = '^';

  parts.forEach(part => {
    pattern += `(?=.*?${part})`;
  });
  return new RegExp(pattern, 'i');
};
