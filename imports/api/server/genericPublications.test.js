import * as pubs from './genericPublications';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import Teams from '../team/teamCollection';

describe('getSkip Function', () => {
  it('returns undefined if pageNumber is undefined', () => {
    expect(pubs.getSkip()).toBe(undefined);
  });
  it('returns at least zero', () => {
    expect(pubs.getSkip(-1)).toBe(0);
    expect(pubs.getSkip(0)).toBe(0);
    expect(pubs.getSkip(1)).toBe(0);
    expect(pubs.getSkip(2)).toBe(10);
  });
});
describe('getLimit Function', () => {
  it('returns undefined if pageNumber is undefined', () => {
    expect(pubs.getLimit()).toBe(undefined);
  });
  it('returns at 20 if pageNumber is 0 and 30 otherwise', () => {
    expect(pubs.getLimit(0)).toBe(20);
    expect(pubs.getLimit(1)).toBe(30);
    expect(pubs.getLimit(2)).toBe(30);
  });
});
describe('user Function', () => {
  it('handles showArchived param', () => {
    Meteor._userId = {};
    expect(
      pubs.user(new Mongo.Collection(), {
        showArchived: true,
      }).docs
    ).toEqual([]);
    expect(
      pubs.user(new Mongo.Collection(), {
        showArchived: false,
      }).docs
    ).toEqual([]);
  });
});
describe('team Function', () => {
  it('defaults pageNumber parameter to 0', () => {
    expect(pubs.team(new Mongo.Collection()).docs).toEqual([]);
  });
  it('handles showArchived param', () => {
    expect(
      pubs.team(new Mongo.Collection(), {
        showArchived: true,
      }).docs
    ).toEqual([]);
    expect(
      pubs.team(new Mongo.Collection(), {
        showArchived: false,
      }).docs
    ).toEqual([]);
  });
});
describe('any Function', () => {
  it('handles showArchived param', () => {
    expect(
      typeof pubs.any(new Mongo.Collection(), {
        showArchived: true,
      })
    ).toBe('object');
    expect(
      typeof pubs.any(new Mongo.Collection(), {
        showArchived: false,
      })
    ).toBe('object');
  });
  it('handles missing params', () => {
    expect(typeof pubs.any(new Mongo.Collection())).toBe('object');
  });
});
describe('configurations.all Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['configurations.all']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['configurations.all']).not.toThrow();
  });
});
describe('contact.user Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['contact.user']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['contact.user']).not.toThrow();
  });
});
describe('company.user Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['company.user']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['company.user']).not.toThrow();
  });
});
describe('opportunity.user Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(Meteor.publications['opportunity.user']).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(Meteor.publications['opportunity.user']).not.toThrow();
  });
});
describe('contact.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['contact.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['contact.single']('b')).not.toThrow();
  });
});
describe('company.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['company.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['company.single']('b')).not.toThrow();
  });
});
describe('opportunity.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['opportunity.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['opportunity.single']('b')).not.toThrow();
  });
});
describe('contact.team Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['contact.team']([])).not.toThrow();
  });
});
describe('company.team Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['company.team']([])).not.toThrow();
  });
});
describe('opportunity.team Meteor Publication', () => {
  it('returns an array of cursors if there is a team', () => {
    Teams.docs = [{ members: [] }];
    expect(Meteor.publications['opportunity.team']('a').constructor.name).toBe(
      'Array'
    );
    Teams.docs = [{}];
    expect(Meteor.publications['opportunity.team']('a').constructor.name).toBe(
      'Object'
    );
    Teams.docs = [];
    expect(Meteor.publications['opportunity.team']('a').constructor.name).toBe(
      'Object'
    );
  });
});
describe('activity.team Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['activity.team']({})).not.toThrow();
  });
});
describe('user.single Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['user.single']('a')).not.toThrow();
  });
});
describe('team.single Meteor Publication', () => {
  it('does not throw without a user', () => {
    Meteor._userId = null;
    expect(() => Meteor.publications['team.single']('b')).not.toThrow();
  });
  it('does not throw if there is a user', () => {
    Meteor._userId = 'a';
    expect(() => Meteor.publications['team.single']('b')).not.toThrow();
  });
});
describe('team.list Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['team.list']([])).not.toThrow();
  });
});
describe('contact.any Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['contact.any']([])).not.toThrow();
  });
});
describe('company.any Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['company.any']([])).not.toThrow();
  });
});
describe('opportunity.any Meteor Publication', () => {
  it('does not throw', () => {
    expect(() => Meteor.publications['opportunity.any']([])).not.toThrow();
  });
});
