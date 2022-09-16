import React, { useState } from 'react'
import './App.css';
import AuthProvider from './providers/authProvider';
import Auth from './components/Auth'

const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
      <React.Fragment>
        <AuthProvider.Provider value={{ status: authstatus, login: login }}>
          <Auth />
        </AuthProvider.Provider>
      </React.Fragment>
  );
};

export default App;
