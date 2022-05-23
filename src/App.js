import './App.css';
import { getMoviesByTerm } from './services/http';

async function App() {
  const data = await getMoviesByTerm(24428);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Buscador de Peliculas</h1>
        <p>Cabecera inicial, despues de limpiar el template</p>
      </header>
      <main>
        <p>Aqui va ir el contenido principal</p>
      </main>
    </div>
  );
}

export default App;
