const express = require('express');
const router = express.Router();
const { getAllNotes, createNewNote, updateExistingNote, deleteExistingNote } = require('../controllers/noteController.js');

router.get('/notes', getAllNotes);
router.post('/notes', createNewNote);
router.put('/notes/:id', updateExistingNote);
router.delete('/notes/:id', deleteExistingNote);

module.exports = router;