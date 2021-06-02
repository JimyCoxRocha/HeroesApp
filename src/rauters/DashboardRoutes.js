import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = ( { history } ) => {//Aquí no se viene las props de AppRoute heredadas de <Router />
    return (
        <>
            <Navbar history = { history } /> {/* Esta no heredas las props de las rutas porque no está con Route. Es un componente nomás */}

            <div className="container mt-2">
                <Switch>

                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path="/search" component={ SearchScreen }/>

                    <Redirect to = "/marvel" />
                </Switch>
            </div>
        </>
    )  
}
