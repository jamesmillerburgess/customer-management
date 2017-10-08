import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import moment from 'moment';

import LogEmailDisplay from './LogEmailDisplay';
import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }) => ({
  emailText: objectEditor.emailText || '',
  isWritingEmail: objectEditor.emailText ? true : false,
  emailTime: objectEditor.emailTime || new Date(),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setEmailText: value => dispatch(setObjectEditorProp('emailText', value)),
  setEmailTime: value => dispatch(setObjectEditorProp('emailTime', value)),
  logEmail: email =>
    Meteor.call(
      ownProps.logEmailMethod,
      ownProps.match.params[ownProps.uriID],
      { ...email, id: new Mongo.ObjectID()._str },
      (err, res) => {
        if (err) {
          console.log(err);
        }
        dispatch(setObjectEditorProp('emailText', ''));
        dispatch(setObjectEditorProp('emailTime', ''));
      }
    ),
  cancelEmail: () => {
    dispatch(setObjectEditorProp('emailText', ''));
    dispatch(setObjectEditorProp('emailTime', new Date()));
  },
});

const InteractionMenuConnect = connect(mapStateToProps, mapDispatchToProps)(
  LogEmailDisplay
);

export default InteractionMenuConnect;
