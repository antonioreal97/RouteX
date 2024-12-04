const axios = require('axios');

// URL do endpoint do seu backend
const API_URL = 'http://localhost:5000/api/telemetry';

// Função para gerar dados aleatórios de localização
function generateRandomTelemetry() {
  const vehicleId = Math.floor(Math.random() * 1000) + 1; // IDs de 1 a 1000
  const latitude = (Math.random() * 180 - 90).toFixed(6); // Latitude entre -90 e 90
  const longitude = (Math.random() * 360 - 180).toFixed(6); // Longitude entre -180 e 180

  return {
    vehicleId: vehicleId.toString(),
    latitude,
    longitude,
  };
}

// Função para enviar dados ao servidor
async function sendTelemetryData() {
  const telemetry = generateRandomTelemetry();
  try {
    const response = await axios.post(API_URL, telemetry);
    console.log('Enviado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao enviar telemetria:', error.message);
  }
}

// Enviar telemetria a cada 5 segundos
setInterval(sendTelemetryData, 5000);
