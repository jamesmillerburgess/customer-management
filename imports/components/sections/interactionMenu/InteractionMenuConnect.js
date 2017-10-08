import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import _ from 'lodash/fp';

import { setObjectEditorProp } from '../../../state/actions/objectEditorActionCreators';

export const mapStateToProps = ({ objectEditor }, ownProps) => ({
  activeInteraction: objectEditor.activeInteraction || ownProps.interactions[0],
  note: objectEditor.note || '',
  isWritingNote: objectEditor.note ? true : false,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setActiveInteraction: value =>
    dispatch(setObjectEditorProp('activeInteraction', value)),
  setNote: note => dispatch(setObjectEditorProp('note', note)),
  addNote: note =>
    Meteor.call(
      ownProps.addNoteMethod,
      ownProps.match.params[ownProps.uriID],
      { note, id: new Mongo.ObjectID()._str },
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
