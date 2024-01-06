// index.tsx

import React from 'react';
import '../styles.css'; // Import the CSS file
import MenuBar from '@/components/MenuBar';
import withAuth from '@/components/withAuth';


import {
  ClerkProvider,
  UserButton,
} from "@clerk/nextjs";

const HomePage: React.FC = () => {
  return (
      <ClerkProvider>
        <h1>Welcome to My Next.js Website!</h1>
        <p>This is the homepage.</p>
        <MenuBar />
        {/* Other homepage content */}
        <UserButton />
      </ClerkProvider>
  );
};

export default HomePage
