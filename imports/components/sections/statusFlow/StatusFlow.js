import { withRouter } from 'react-router';
import StatusFlowConnect from './StatusFlowConnect';
import StatusFlowDisplay from './StatusFlowDisplay';

const StatusFlow = withRouter(StatusFlowConnect(StatusFlowDisplay));

export default StatusFlow;
