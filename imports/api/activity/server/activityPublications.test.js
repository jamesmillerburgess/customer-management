import Team from '../../team/teamCollection';
import { team } from './activityPublications';

describe('activity.team Meteor Publication', () => {
  it('returns a cursor', () => {
    Team.docs = [{ members: [] }];
    expect(team('a').constructor.name).toBe('Object');
  });
});
