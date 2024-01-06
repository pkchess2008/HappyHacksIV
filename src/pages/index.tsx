// index.tsx

import React from 'react';
import MenuBar from '../components/MenuBar';
import '../styles.css'; // Import the CSS file
import { UserButton } from '@clerk/nextjs';

const HomePage: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <div>
        <h1>Welcome to My Next.js Website!</h1>
        <p>This is the homepage.</p>
        {/* Other homepage content */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default HomePage;
