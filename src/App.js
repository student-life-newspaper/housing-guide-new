import React from 'react';
import logo from './logo.svg';
import Main from './components/Main.js'
import './App.css';

function App() {
  return (
    <div className="root">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />
      <Main />
    </div>
  );
}

export default App;
