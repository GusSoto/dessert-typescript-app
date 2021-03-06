import React from 'react';
import './App.css';
import 'tachyons';
import DessertList from './components/Dessert/DessertList';
import DessertProvider from './contexts/Dessert/DessertContext';

function App() {
  return (
    <DessertProvider>
      <DessertList/>
    </DessertProvider>
  );
}

export default App;
