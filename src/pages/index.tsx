import React from 'react';
import MenuBar from '@/components/MenuBar';
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import '../styles.css'; // Import the CSS file

const HomePage: React.FC = () => {
  // Simulated array of post objects
  const posts = [
    { id: 1, imageUrl: 'https://via.placeholder.com/150', caption: 'Sample post 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/150', caption: 'Sample post 2' },
    // Add more posts as needed
  ];

  return (
    <ClerkProvider>
      <div className="home-page">
        <div className="header">
          <MenuBar />
        </div>

        <div className="feed">
          <div className="posts">
            {posts.map(post => (
              <div className="post" key={post.id}>
                <img src={post.imageUrl} alt={`Post ${post.id}`} />
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
};

export default HomePage
