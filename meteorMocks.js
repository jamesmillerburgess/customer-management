export const Meteor = {
  startup: cb => cb(),
  user: function() {
    return this.loggedInUser;
  },
  loggingIn: function() {
    return this.isLoggingIn;
  },
  isLoggingIn: false,
  loggedInUser: null,
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

export const createContainer = () => null;
