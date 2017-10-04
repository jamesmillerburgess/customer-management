import React from 'react';

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
      findOne: function() {
        return this.docs[0];
      },
      count: function() {
        return this.num;
      },
      update: function() {
        return this;
      },
      fetch: function() {
        return this.docs;
      },
      num: 0,
      docs: [],
    };
  },
};

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
  _methods: {},
  methods: () => null,
  call: function() {
    if (typeof arguments[0] === 'string' && this._methods[arguments[0]]) {
      this._methods[arguments[0]]();
    }
    if (
      arguments.length > 0 &&
      typeof arguments[arguments.length - 1] === 'function'
    ) {
      arguments[arguments.length - 1](this.err, this.res);
    }
  },
  loginWithPassword: function(username, password, cb) {
    return cb(this.err, this.res);
  },
  err: null,
  res: null,
  publications: {},
  publish: function(publications) {
    this.publications = publications;
  },
  users: new Mongo.Collection(),
  subscribe: function() {
    return {
      ready: () => {
        return this.ready;
      },
    };
  },
  ready: false,
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
