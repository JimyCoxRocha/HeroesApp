import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useLocalStorage } from './hooks/useLocalStorage';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //Para las props
}) => {
    const [ createLocalStorage ] = useLocalStorage();
    createLocalStorage( "lastPath", rest.location.pathname )
    //console.log(rest.location.pathname);
    return (
        <Route {...rest}
            component = { (props) => ( //Para obtener history, params y location se usa el CallBack
                ( isAuthenticated )
                    ? ( <Component { ...props }/> )
                    : ( <Redirect to="/login" { ...props } /> )
            )}
        />
    )
}

PrivateRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired //YA que es una Componente Funcional
}
