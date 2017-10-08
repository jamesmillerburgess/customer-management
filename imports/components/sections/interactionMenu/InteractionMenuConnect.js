import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }, ownProps) => ({
  activeInteraction: objectEditor.activeInteraction || ownProps.interactions[0],
});

export const mapDispatchToProps = dispatch => ({
  setActiveInteraction: value =>
    dispatch(setObjectEditorProp('activeInteraction', value)),
});

const InteractionMenuConnect = connect(mapStateToProps, mapDispatchToProps);

export default InteractionMenuConnect;
