const sqlite3 = require('sqlite3').verbose();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// =====================
// Configuração do SQLite
// =====================
const sqliteDB = new sqlite3.Database(path.resolve(__dirname, '../database.sqlite'), (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// =====================
// Configuração do MongoDB
// =====================
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// =====================
// Exportação dos Bancos
// =====================
module.exports = {
  sqliteDB, // Exporta o banco SQLite
  mongoose, // Exporta a conexão do MongoDB
};
