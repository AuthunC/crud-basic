import { useEffect, useState } from 'react';
import './App.css';
import Eg1 from './Eg1';
import Eg2 from './Eg2';

function App() {

  // This project only has PATCH (UPDATE) and DELETE
  // GET and POST can be found in "fetch-api" project

  // Eg1 - UPDATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (post) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...post, title: updatedTitle }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedPost = await res.json();
      setData(data.map(item => (item.id === updatedPost.id ? updatedPost : item)));
      setSelectedPost(null);
      setUpdatedTitle('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setUpdatedTitle(post.title); // Set the updatedTitle to the title of the selected post
  };

  //Eg2 - DELETE

  const [data1, setData1] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data1 = await response.json();
        setData1(data1);
      } catch (error1) {
        setError1(error1.message);
      } finally {
        setLoading1(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      setData1(data1.filter(item => item.id !== id));
    } catch (error1) {
      setError1(error1.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <Eg1 
        data={data}
        loading={loading}
        error={error}
        selectedPost={selectedPost}
        setSelectedPost={handleSelectPost}
        updatedTitle={updatedTitle}
        setUpdatedTitle={setUpdatedTitle}
        handleUpdate={handleUpdate}
      />
      <Eg2 
        data1={data1}
        loading1={loading1}
        error1={error1}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
