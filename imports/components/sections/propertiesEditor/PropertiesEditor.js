import { withRouter } from 'react-router';
import PropertiesEditorConnect from './PropertiesEditorConnect';
import PropertiesEditorDisplay from './PropertiesEditorDisplay';

const PropertiesEditor = withRouter(
  PropertiesEditorConnect(PropertiesEditorDisplay)
);

export default PropertiesEditor;
