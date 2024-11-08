import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DataTable from './components/DataTable';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="dashboard">
        <Sidebar />
        <DataTable />
      </div>
    </div>
  );
}

export default App;
