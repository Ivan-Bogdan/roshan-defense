import React from 'react';
import './App.css';
import Main from './containers/main';
import Head from './containers/head';



function App() {
  return (
    <div className="app">
      <Head />
      <div className="app-main">
          <Main>
          </Main>
      </div>
    </div>
  );
}

export default App;
