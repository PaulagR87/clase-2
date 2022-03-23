import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola <code>Mi nombre </code> es Paula Rodriguez.
        </p>
        <a
          className="App-link"
          href="https://paulagr87.github.io/Porfoliomine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Porfolio creado con lo aprendido en CoderHouse
        </a>
      </header>
    </div>
  );
}

export default App;
