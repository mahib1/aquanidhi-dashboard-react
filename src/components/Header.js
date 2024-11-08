
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">AQUANIDHI</div>
      <nav>
        <ul>
          <li>Admin Dashboard</li>
          <li>Data Analysis</li>
          <li>Version Control</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="right-section">
        <button className="download-btn">Download</button>
        <div className="profile-icon">👤</div>
      </div>
    </header>
  );
}

export default Header;
