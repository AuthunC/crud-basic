import React from 'react'

const Eg2 = ({data1, error1, handleDelete, loading1}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Delete Operation</h1>
      <ul>
        {data1.map(post => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Eg2