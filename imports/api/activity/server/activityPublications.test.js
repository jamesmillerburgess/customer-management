import Team from '../../team/teamCollection';
import { team } from './activityPublications';

describe('activity.team Meteor Publication', () => {
  it('returns a cursor if there is a team with members', () => {
    Team.docs = [{ members: [] }];
    expect(team('a').constructor.name).toBe('Object');
  });
  it('returns a cursor if there is no team with members', () => {
    Team.docs = [{ members: null }];
    expect(team('a').constructor.name).toBe('Object');
    Team.docs = [];
    expect(team('a').constructor.name).toBe('Object');
  });
});
