const mongoose = require('mongoose');
const Location = require('./models/database-mongo');

mongoose.connect('mongodb://localhost:27017/routex', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar:', err));

const seedData = [
  { vehicleId: '123', latitude: -23.550520, longitude: -46.633308 },
  { vehicleId: '456', latitude: -23.551230, longitude: -46.634890 },
  { vehicleId: '789', latitude: -23.552840, longitude: -46.635700 }
];

async function seedDatabase() {
  try {
    await Location.insertMany(seedData);
    console.log('Dados inseridos com sucesso!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Erro ao inserir:', error);
  }
}

seedDatabase();
