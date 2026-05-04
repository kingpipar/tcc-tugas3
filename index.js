const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/database.js');
const noteRoutes = require('./routes/noteRoutes.js');
const NoteSchema = require('./schema/Note.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Jika ingin mengakses file frontend (index.html) langsung dari Express
app.use(express.static('public')); 

app.use('/api', noteRoutes);

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database Connected...');
        
        // .sync() otomatis membuat tabel di DB jika belum ada
        await NoteSchema.sync(); 
        
        app.listen(PORT, () => {
            console.log(`Server up and running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Connection error:', error);
    }
}

startServer();