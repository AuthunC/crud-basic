import React from 'react';

const Eg1 = ({ data, loading, error, selectedPost, setSelectedPost, updatedTitle, setUpdatedTitle, handleUpdate }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Update Operation</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => setSelectedPost(post)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Updated Title"
          />
          <button onClick={() => handleUpdate(selectedPost)}>Update</button>
        </div>
      )}
      {error && <p>Error: {error}</p>}
      <hr />
    </div>
  );
};

export default Eg1;
