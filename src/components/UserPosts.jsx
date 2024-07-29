// src/components/UserPosts.js

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Post', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    if (token) {
      fetchPosts();
    }
  }, [token]);

  return (
    <div>
      <h2>Publicaciones del Usuario</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}
    </div>
  );
};

export default UserPosts;
