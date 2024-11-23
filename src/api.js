import axios from 'axios';

const API_URL = 'http://localhost:5000/notes';

export const getNotes = async (category, search) => {
  try {
    const response = await axios.get(API_URL, {
      params: { category, search },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching notes", error);
    return [];
  }
};

export const createNote = async (note) => {
  try {
    const response = await axios.post(API_URL, note);
    return response.data;
  } catch (error) {
    console.error("Error creating note", error);
    return null;
  }
};

export const updateNote = async (id, updatedNote) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Error updating note", error);
    return null;
  }
};

export const deleteNote = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.error("Error deleting note", error);
    return null;
  }
};
