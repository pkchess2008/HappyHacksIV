// index.tsx

import React from 'react';
import MenuBar from '../components/MenuBar';
import '../styles.css'; // Import the CSS file

const HomePage: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <div>
        <h1>Welcome to My Next.js Website!</h1>
        <p>This is the homepage.</p>
        {/* Other homepage content */}
      </div>
    </div>
  );
};

export default HomePage;
