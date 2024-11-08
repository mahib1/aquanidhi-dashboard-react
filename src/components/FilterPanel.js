
import React from 'react';
import '../styles/FilterPanel.css';

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <h2>Filters</h2>

      <div className="filter-group">
        <label htmlFor="species">Species</label>
        <select id="species">
          <option value="">Select Species</option>
          <option value="milkfish">Milkfish</option>
          <option value="tuna">Yellowfin Tuna</option>
          <option value="shrimp">Black Tiger Shrimp</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
      </div>

      <div className="filter-group">
        <label htmlFor="longitude">Longitude</label>
        <input type="number" id="longitude" placeholder="Enter longitude" />
      </div>

      <div className="filter-group">
        <label htmlFor="latitude">Latitude</label>
        <input type="number" id="latitude" placeholder="Enter latitude" />
      </div>

      <div className="filter-group">
        <label htmlFor="status">Occurrence Status</label>
        <select id="status">
          <option value="">Select Status</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="depth">Depth</label>
        <input type="number" id="depth" placeholder="Enter depth" />
      </div>

      <button className="apply-filters-btn">Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
