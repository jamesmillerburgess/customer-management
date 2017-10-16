import Team from '../../team/teamCollection';
import { team } from './activityPublications';

describe('activity.team Meteor Publication', () => {
  it('returns a cursor if there is a team', () => {
    Team.docs = [{ members: [] }];
    expect(team('a').constructor.name).toBe('Object');
    Team.docs = [{ members: null }];
    expect(team('a')).toBe(null);
    Team.docs = [{}];
    expect(team('a')).toBe(null);
  });
});
