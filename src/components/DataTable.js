
import React from 'react';
import '../styles/DataTable.css';

function DataTable() {
  const data = [
    { scientific: 'Penaeus Monodon', local: 'Black Tiger Shrimp', area: 'Chilika Lake', coordinates: '29.46° N, 190.28° E', eventDate: '25-12-2024', status: 'Present', kingdom: 'Arthropoda' },
    { scientific: 'Chanos Chanos', local: 'Milkfish', area: 'Andhra Pradesh Coast', coordinates: '20.46° N, 185.28° E', eventDate: '12-09-2024', status: 'Present', kingdom: 'Animalia' },
    { scientific: 'Mugil Cephalus', local: 'Flathead Grey Mullet', area: 'Pichavaram Mangroves', coordinates: '46.46° N, 150.28° E', eventDate: '09-02-2024', status: 'Present', kingdom: 'Animalia' },
  ];

  return (
    <div className="data-table">
      <div className="table-header">
        <span>Table</span>
        <span>Gallery</span>
        <span>Maps</span>
        <span>Metrics</span>
        <span>Community</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Scientific Name</th>
            <th>Local Name</th>
            <th>Area</th>
            <th>Coordinates</th>
            <th>Event Date</th>
            <th>Occurrence Status</th>
            <th>Kingdom</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.scientific}</td>
              <td>{item.local}</td>
              <td>{item.area}</td>
              <td>{item.coordinates}</td>
              <td>{item.eventDate}</td>
              <td>{item.status}</td>
              <td>{item.kingdom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
