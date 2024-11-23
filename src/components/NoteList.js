import React from 'react';
import '../styles/NoteList.css'; // Import the CSS for this component

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <p><strong>Category:</strong> {note.category}</p>
          <div className="note-actions">
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
