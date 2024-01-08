import React, { useState } from 'react';
import './BlogFileCreator.css';

interface Blog {
  id: number;
  title: string;
  content: string;
}

const BlogFileCreator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);  // State to store blogs

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Content:', content);

    // Create a new blog object
    const newBlog: Blog = {
      id: blogs.length + 1,  // Unique ID for each blog
      title,
      content,
    };

    // Update the blogs state with the new blog
    setBlogs([...blogs, newBlog]);

    // Reset form after submission
    setTitle('');
    setContent('');
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

      {/* Render the list of blogs */}
      <div className="blogs-list">
        <h3>Blogs</h3>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <strong>{blog.title}</strong>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogFileCreator;
