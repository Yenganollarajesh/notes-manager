import React, { useState, useEffect } from 'react';
import { getNotes, deleteNote } from './api';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import "./styles/App.css"

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async (search = '', category = '') => {
    const fetchedNotes = await getNotes(category, search);
    setNotes(fetchedNotes);
  };

  const handleDelete = async (id) => {
    const deletedId = await deleteNote(id);
    if (deletedId) {
      setNotes(notes.filter((note) => note.id !== deletedId));
    }
  };

  const handleSave = (note) => {
    setNotes([note, ...notes]);
    setEditingNote(null);
  };

  const handleSearch = (searchText, category) => {
    loadNotes(searchText, category);
  };

  return (
    <div className="app">
      <h1>Personal Notes Manager</h1>
      <SearchBar onSearch={handleSearch} />
      <NoteForm note={editingNote} onSave={handleSave} onCancel={() => setEditingNote(null)} />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={handleDelete} />
    </div>
  );
};

export default App;
