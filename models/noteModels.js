const Note = require('../schema/Note.js');

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.getNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createNewNote = async (req, res) => {
    try {
        const newNote = await Note.createNote(req.body);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateExistingNote = async (req, res) => {
    try {
        await Note.updateNote(req.params.id, req.body);
        res.json({ message: "Catatan berhasil diupdate" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteExistingNote = async (req, res) => {
    try {
        await Note.deleteNote(req.params.id);
        res.json({ message: "Catatan berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getAllNotes, createNewNote, updateExistingNote, deleteExistingNote };
