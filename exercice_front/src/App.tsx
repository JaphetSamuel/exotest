import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecetteView from './components/recetteview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RecetteView ></RecetteView>

      <button>Ajouter une recette</button>
      </header>
      
    </div>
  );
}

export default App;
