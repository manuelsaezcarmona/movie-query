import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <header className="App-header">
          <h1>Buscador de Peliculas</h1>
          <p>Cabecera inicial, despues de limpiar el template</p>
        </header>
        <main>
          <p>Aqui va ir el contenido principal</p>
        </main>
      </div>
    </Provider>
  );
}

export default App;
