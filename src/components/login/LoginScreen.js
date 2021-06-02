import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext( AuthContext );
    const [ , obtainLocalStorage ] = useLocalStorage();

    const handleClick = () => {
        const lastPath = obtainLocalStorage( "lastPath" ) || "/"; //Si no existe en el local Storage el valor del Path, lo redireccionamos a -->> "/"
        //history.replace("/")
        dispatch({
            type: types.login,
            payload: {
                name: "Jimy"
            }
        });
        history.replace( lastPath )
    }

    return (
        <div className = "container mt-5">
            <h1>Login Screen</h1>

            <hr />

            <button
                className="btn btn-primary"
                onClick= { handleClick }
            >
                Login
            </button>
        </div>
    )
}
