import React from 'react';

export const Meteor = {
  startup: cb => cb(),
  user: function() {
    return this.loggedInUser;
  },
  userId: function() {
    return this._userId;
  },
  loggingIn: function() {
    return this.isLoggingIn;
  },
  isLoggingIn: false,
  loggedInUser: null,
  logout: cb => cb(),
  _userId: null,
  methods: () => null,
  call: function() {
    if (arguments.length > 0) {
      arguments[arguments.length - 1]();
    }
  },
  users: {
    update: () => null,
  },
  loginWithPassword: function(username, password, cb) {
    return cb(this.err, this.res);
  },
  err: null,
  res: null,
  publish: jest.fn(),
};

export const Mongo = {
  ObjectID: () => ({ _str: 'str' }),
  Collection: name => {
    return {
      insert: function() {
        this.num += 1;
        return this;
      },
      remove: function() {
        this.num = 0;
        return this;
      },
      find: function() {
        return this;
      },
      count: function() {
        return this.num;
      },
      update: function () {
        return this;
      }
      num: 0,
    };
  },
};

export const Accounts = {
  createUser: function(user, cb) {
    return cb(this.err, this.res);
  },
  err: null,
  res: null,
};

export const createContainer = (options = {}, Component) => props => (
  <Component {...options(props)} />
);
