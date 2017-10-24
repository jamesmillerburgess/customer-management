import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { withRouter } from 'react-router';

import InteractionDisplay from './InteractionDisplay';
import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }, ownProps) => ({
  text: objectEditor[ownProps.textProp] || '',
  isWriting: objectEditor[ownProps.textProp] ? true : false,
  time: objectEditor[ownProps.timeProp] || new Date(),
  outcome: objectEditor[ownProps.outcomeProp] || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setText: value => dispatch(setObjectEditorProp(ownProps.textProp, value)),
  setTime: value => dispatch(setObjectEditorProp(ownProps.timeProp, value)),
  setOutcome: value =>
    dispatch(setObjectEditorProp(ownProps.outcomeProp, value)),
  logInteraction: interaction => {
    Meteor.call(
      ownProps.logInteractionMethod,
      ownProps.match.params[ownProps.uriID],
      {
        ...interaction,
        id: new Mongo.ObjectID()._str,
        type: ownProps.interactionType,
      },
      (err, res) => {
        if (err) {
          console.log(err);
        }
      }
    );
    dispatch(setObjectEditorProp(ownProps.textProp, ''));
    dispatch(setObjectEditorProp(ownProps.timeProp, new Date()));
    dispatch(setObjectEditorProp(ownProps.outcomeProp, ''));
  },
  cancelInteraction: () => {
    dispatch(setObjectEditorProp(ownProps.textProp, ''));
    dispatch(setObjectEditorProp(ownProps.timeProp, new Date()));
    dispatch(setObjectEditorProp(ownProps.outcomeProp, ''));
  },
});

const InteractionConnect = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InteractionDisplay)
);

export default InteractionConnect;
