// src/App.js

import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import UserPosts from './components/UserPosts';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
        <UserPosts />
      </div>
    </AuthProvider>
  );
}

export default App;
