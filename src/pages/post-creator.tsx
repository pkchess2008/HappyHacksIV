// components/PostCreator.tsx

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './post-creator.css'; // Import your CSS file for styling

const PostCreator: React.FC = () => {
  const [imageURL, setImageURL] = useState('');
  const [caption, setCaption] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setImageURL(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform actions with imageURL and caption, e.g., submit to backend
    console.log('Image URL:', imageURL);
    console.log('Caption:', caption);
    // Reset form after submission
    setImageURL('');
    setCaption('');
  };

  return (
    <div className="post-creator" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <form onSubmit={handleSubmit}>
        <div className="preview" style={{ border: imageURL ? 'none' : '2px dashed #ccc' }}>
          {imageURL && <img src={imageURL} alt="Post Preview" />}
          {!imageURL && <p>Drag & Drop your file here or</p>}
        </div>
        <TextField
          className="input-field"
          placeholder="Paste Image URL"
          variant="outlined"
          value={imageURL}
          onChange={handleImageChange}
        />
        <TextField
          className="input-field"
          placeholder="Write a caption..."
          variant="outlined"
          value={caption}
          onChange={handleCaptionChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Share
        </Button>
      </form>
    </div>
  );
};

export default PostCreator;
