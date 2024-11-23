import React, { useState, useEffect } from 'react';
import { createNote, updateNote } from '../api';
import '../styles/NoteForm.css'; // Import the CSS for this component

const NoteForm = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Others');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setCategory(note.category);
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = { title, description, category };

    if (note) {
      // Edit existing note
      const updatedNote = await updateNote(note.id, newNote);
      onSave(updatedNote);
    } else {
      // Create new note
      const createdNote = await createNote(newNote);
      onSave(createdNote);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default NoteForm;
