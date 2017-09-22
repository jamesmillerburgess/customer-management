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
  _userId: null,
  methods: () => null,
  call: () => null,
  users: {
    update: () => null,
  },
  loginWithPassword: () => null,
};

export const Mongo = {
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
      num: 0,
    };
  },
};

export const Accounts = {
  createUser: () => null,
};

export const createContainer = (options, component) => component;
