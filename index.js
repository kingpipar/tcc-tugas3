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

// Nyalakan server DULU supaya Cloud Run senang karena port terbuka
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    
    // Baru setelah itu coba koneksi database
    try {
        await db.authenticate();
        console.log('Database Connected...');
        await NoteSchema.sync();
        console.log('Database Synchronized...');
    } catch (error) {
        console.error('DATABASE ERROR:', error.message);
        // Server tetap nyala walaupun DB error, jadi kamu bisa baca log-nya dengan tenang
    }
});

// startServer();
