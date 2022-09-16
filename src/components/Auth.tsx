import React, { useContext } from "react";
import AuthProvider from '../providers/authProvider'

const Auth = () => {
    const auth = useContext(AuthProvider);
    console.log(auth.status);
    return (
        <div>
            <h1>Are you authenticated?</h1>
            {auth.status ?

                <p>Yes you are</p>

                :

                <p>Nopes</p>

            }

            <button onClick={auth.login}>Click To Login</button>
        </div>
    );
}

export default Auth;