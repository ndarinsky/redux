import React from "react";

const NoteEditor = ({ note, onChangeNote, onCloseNote }) => {
  return (
    <div>
      <div>
        <textarea
          className="editor-content"
          autoFocus
          value={note.content}
          onChange={event => onChangeNote(note.id, event.target.value)}
          rows={10}
          cols={80}
        />
      </div>
      <button className="editor-button" onClick={onCloseNote}>
        Close
      </button>
    </div>
  );
};

export default NoteEditor;
