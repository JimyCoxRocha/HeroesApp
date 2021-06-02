import React from 'react'
import { Redirect, Route } from "react-router"


export const PublicRoute = ({
    component: Component,
    isAuthenticated:{logged},
    ...rest
}) => {
    return (<Route { ...rest }
        component = {
            (props) => (
                ( !logged ) 
                    ? <Component {...props} />
                    : <Redirect to= "/marvel" {...props} />
            )
        }
    />)
        
}