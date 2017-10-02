import { withRouter } from 'react-router';
import InteractionMenuConnect from './InteractionMenuConnect';
import InteractionMenuDisplay from './InteractionMenuDisplay';

const InteractionMenu = withRouter(
  InteractionMenuConnect(InteractionMenuDisplay)
);

export default InteractionMenu;
