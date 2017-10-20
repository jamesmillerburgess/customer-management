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
  Error: function(error) {
    return { error };
  },
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
  methods: function(methods) {
    this._methods = methods;
  },
  apply: function() {
    return this.call.apply(this, arguments);
  },
  call: function() {
    if (
      typeof arguments[0] === 'string' &&
      this._methods &&
      this._methods[arguments[0]]
    ) {
      this._methods[arguments[0]]();
    }
    if (
      arguments.length > 0 &&
      typeof arguments[arguments.length - 1] === 'function'
    ) {
      arguments[arguments.length - 1](this.err, this.res);
    }
    return this.res;
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
  _subscriptions: [],
  subscribe: function() {
    Meteor._subscriptions.push([...arguments]);
    return {
      ready: () => {
        return Meteor.ready;
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

export const check = (param, type) => {
  if (param === null && type === null) {
    throw new Error('Check failed');
  }
  if (param.constructor.name !== type.name) {
    throw new Error('Check failed');
  }
};
