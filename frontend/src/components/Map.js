import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Garante que o backend URL esteja definido
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';
const socket = io(BACKEND_URL);

function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Listener para receber atualizações de localização
    socket.on('locationUpdate', (data) => {
      setLocations((prev) => {
        // Verifica se a nova localização já está na lista para evitar duplicados
        const exists = prev.some(
          (loc) => loc.vehicleId === data.vehicleId && loc.timestamp === data.timestamp
        );
        if (!exists) {
          return [...prev, data];
        }
        return prev;
      });
    });

    // Cleanup: Remove o listener ao desmontar o componente
    return () => {
      socket.off('locationUpdate');
    };
  }, []);

  return (
    <div>
      <h2>Vehicle Locations</h2>
      {locations.length > 0 ? (
        locations.map((loc, idx) => (
          <p key={idx}>
            Vehicle {loc.vehicleId}: {loc.latitude}, {loc.longitude} at {loc.timestamp}
          </p>
        ))
      ) : (
        <p>No locations available.</p>
      )}
    </div>
  );
}

export default Map;

