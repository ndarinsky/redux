const CREATE_NOTE = 'CREATE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';


const initialState = {
  nextNoteId: 1,
  notes: {}
};

/**
 * PURE functions. NEVER change\mutate state directly.
 * Don't change the state. Instead, create shallow copies of the state and any nested objects/arrays
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_NOTE: {
        const id = state.nextNoteId;
        const newNote = {
          id,
          content: ''
        };
        return {
          ...state,
          nextNoteId: id + 1,
          notes: {
            ...state.notes,
            [id]: newNote
          }
        };
      }
      case UPDATE_NOTE: {
        const {id, content} = action;
        const editedNote = {
          ...state.notes[id],
          content
        };
        return {
          ...state,
          notes: {
            ...state.notes,
            [id]: editedNote
          }
        };
      }
      default:
        return state;
    }
  };

  export default reducer;