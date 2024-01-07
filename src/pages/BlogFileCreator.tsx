import React, { useState } from 'react';
import './BlogFileCreator.css';

const BlogFileCreator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Content:', content);
    // Handle submission logic here
  };

  return (
    <div className="blog-file-creator-container">
      <h2>Create a Blog File</h2>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="input-title"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={handleContentChange}
          className="input-content"
        ></textarea>
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Create
      </button>
    </div>
  );
};

export default BlogFileCreator;
