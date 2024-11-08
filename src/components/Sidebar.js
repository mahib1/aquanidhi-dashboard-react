
import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Occurrence / Abundance</h2>
      <div className="filter-group">
        <label>Species</label>
        <select><option>Select</option></select>
      </div>
      <div className="filter-group">
        <label>Date</label>
        <select><option>Select</option></select>
      </div>
      <div className="filter-group">
        <label>Longitude</label>
        <select><option>Select</option></select>
      </div>
      <div className="filter-group">
        <label>Latitude</label>
        <select><option>Select</option></select>
      </div>
      <div className="filter-group">
        <label>Occurrence Status</label>
        <select><option>Select</option></select>
      </div>
      <div className="filter-group">
        <label>Depth</label>
        <select><option>Select</option></select>
      </div>
    </aside>
  );
}

export default Sidebar;
