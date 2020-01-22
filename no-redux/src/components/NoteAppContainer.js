import NoteApp from "./NoteApp";
import connect from './../redux/connect'

const CREATE_NOTE = "CREATE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const OPEN_NOTE = "OPEN_NOTE";
const CLOSE_NOTE = "CLOSE_NOTE";

/**
 * Describes how to get properties from state.
 * @param {*} state 
 */
const mapStateToProps = state => ({
  notes: state.notes,
  openNoteId: state.openNoteId
});

/**
 * Describes when to dispatch each action.
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
  onAddNote: () => dispatch({
    type: CREATE_NOTE
  }),
  onChangeNote: (id, content) => dispatch({
    type: UPDATE_NOTE,
    id,
    content
  }),
  onOpenNote: id => dispatch({
    type: OPEN_NOTE,
    id
  }),
  onCloseNote: () => dispatch({
    type: CLOSE_NOTE
  })
});

const NoteAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteApp);


// Old implementations - when we wire everything manually without connect
// class NoteAppContainer extends React.Component {
//   constructor(props) {
//     super();
//     this.state = props.store.getState();
//     this.onAddNote = this.onAddNote.bind(this);
//     this.onChangeNote = this.onChangeNote.bind(this);
//     this.onOpenNote = this.onOpenNote.bind(this);
//     this.onCloseNote = this.onCloseNote.bind(this);
//   }
//   componentWillMount() {
//     this.unsubscribe = this.props.store.subscribe(() =>
//       this.setState(this.props.store.getState())
//     );
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   onAddNote() {
//     this.props.store.dispatch({
//       type: CREATE_NOTE
//     });
//   }
//   onChangeNote(id, content) {
//     this.props.store.dispatch({
//       type: UPDATE_NOTE,
//       id,
//       content
//     });
//   }
//   onOpenNote(id) {
//     this.props.store.dispatch({
//       type: OPEN_NOTE,
//       id
//     });
//   }
//   onCloseNote() {
//     this.props.store.dispatch({
//       type: CLOSE_NOTE
//     });
//   }
//   render() {
//     return (
//       <NoteApp
//         {...this.state}
//         onAddNote={this.onAddNote}
//         onChangeNote={this.onChangeNote}
//         onOpenNote={this.onOpenNote}
//         onCloseNote={this.onCloseNote}
//       />
//     );
//   }
// }

export default NoteAppContainer;
