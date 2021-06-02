import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    const { user } = useContext( AuthContext );
    
    return (
        <Router> {/* Todas las props com history se pasan a los hijos de debajo */}
            <div>
                <Switch>
                    <PublicRoute 
                        path="/login"
                        component = { LoginScreen }
                        isAuthenticated = { user }
                    />
                    
                    <PrivateRoute 
                        path = "/" 
                        component = { DashboardRoutes }  
                        isAuthenticated = { user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
