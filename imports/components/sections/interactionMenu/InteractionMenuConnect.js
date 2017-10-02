import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash/fp';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }) => ({
  note: objectEditor.note || '',
  isWritingNote: objectEditor.note ? true : false,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setNote: note => dispatch(setObjectEditorProp('note', note)),
  addNote: note =>
    Meteor.call(
      ownProps.addNoteMethod,
      ownProps.match.params[ownProps.uriID],
      note,
      (err, res) => {
        if (err) {
          console.log(err);
        }
        dispatch(setObjectEditorProp('note', ''));
      }
    ),
  cancelNote: () => dispatch(setObjectEditorProp('note', '')),
});

const InteractionMenuConnect = connect(mapStateToProps, mapDispatchToProps);

export default InteractionMenuConnect;