import './App.css';
import Map from './components/Map';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho do dashboard */}
      <header className="App-header">
        <h1>RouteX Dashboard</h1>
      </header>

      {/* Conteúdo principal */}
      <main className="App-main">
        <section className="App-section">
          <h2>Map</h2>
          <Map />
        </section>

        <section className="App-section">
          <h2>Dashboard</h2>
          <Dashboard />
        </section>

        <section className="App-section">
          <h2>Alerts</h2>
          <Alerts />
        </section>
      </main>
    </div>
  );
}

export default App;
