import React from 'react';
import Map from './components/Map';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';

function App() {
  return (
    <div>
      <h1>RouteX Dashboard</h1>
      <Map />
      <Dashboard />
      <Alerts />
    </div>
  );
}

export default App;
