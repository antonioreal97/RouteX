const express = require('express');
const db = require('../models/database'); // SQLite database (if needed for local data)
const Location = require('../models/database-mongo'); // MongoDB model for real-time telemetry
const router = express.Router();

// =====================
// Endpoint para adicionar telemetria
// =====================
router.post('/telemetry', async (req, res) => {
  const { vehicleId, latitude, longitude } = req.body;

  // Validação de entrada
  if (!vehicleId || !latitude || !longitude) {
    return res.status(400).json({ error: 'Vehicle ID, latitude, and longitude are required.' });
  }

  try {
    // Salva a telemetria no MongoDB
    const location = new Location({ vehicleId, latitude, longitude });
    await location.save();

    // Retorna resposta de sucesso
    res.status(201).json({ message: 'Telemetry saved successfully', location });
  } catch (error) {
    console.error('Error saving telemetry:', error.message);
    res.status(500).json({ error: 'Failed to save telemetry data.' });
  }
});

// =====================
// Endpoint para obter a localização atual de um veículo
// =====================
router.get('/vehicles/:id/location', async (req, res) => {
  const vehicleId = req.params.id;

  if (!vehicleId) {
    return res.status(400).json({ error: 'Vehicle ID is required.' });
  }

  try {
    // Consulta a última localização do veículo no MongoDB
    const location = await Location.findOne({ vehicleId }).sort({ timestamp: -1 });

    if (!location) {
      return res.status(404).json({ error: 'Location not found for this vehicle.' });
    }

    // Retorna a última localização encontrada
    res.json(location);
  } catch (error) {
    console.error('Error fetching location:', error.message);
    res.status(500).json({ error: 'Failed to retrieve vehicle location.' });
  }
});

// =====================
// Endpoint para listar todas as localizações de um veículo
// =====================
router.get('/vehicles/:id/locations', async (req, res) => {
  const vehicleId = req.params.id;

  if (!vehicleId) {
    return res.status(400).json({ error: 'Vehicle ID is required.' });
  }

  try {
    // Consulta todas as localizações do veículo no MongoDB
    const locations = await Location.find({ vehicleId }).sort({ timestamp: -1 });

    if (locations.length === 0) {
      return res.status(404).json({ error: 'No locations found for this vehicle.' });
    }

    // Retorna todas as localizações
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error.message);
    res.status(500).json({ error: 'Failed to retrieve vehicle locations.' });
  }
});

// =====================
// Endpoint para apagar todas as localizações de um veículo (opcional)
// =====================
router.delete('/vehicles/:id/locations', async (req, res) => {
  const vehicleId = req.params.id;

  if (!vehicleId) {
    return res.status(400).json({ error: 'Vehicle ID is required.' });
  }

  try {
    // Apaga todas as localizações do veículo no MongoDB
    await Location.deleteMany({ vehicleId });
    res.status(200).json({ message: `All locations for vehicle ${vehicleId} have been deleted.` });
  } catch (error) {
    console.error('Error deleting locations:', error.message);
    res.status(500).json({ error: 'Failed to delete vehicle locations.' });
  }
});

module.exports = router;
