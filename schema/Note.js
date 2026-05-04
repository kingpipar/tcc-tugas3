const { DataTypes } = require('sequelize');
const db = require('../config/database.js');

const NoteSchema = db.define('notes', {
    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isi: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tanggal_dibuat: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true,
    timestamps: false // Dimatikan karena kita pakai custom 'tanggal_dibuat'
});

module.exports = NoteSchema;