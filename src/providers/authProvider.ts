
import React from 'react';

// Creating the context object and passing the default values.
const AuthProvider = React.createContext({status:false,login:()=>{}});

export default AuthProvider;