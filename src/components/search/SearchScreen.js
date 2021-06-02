import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const SearchScreen = ( {history} ) => {
    const [ createLocalStorage ] = useLocalStorage();
    createLocalStorage("pageBefore", "SearchScreen");
    const location = useLocation();
    // console.log(location.search);
    // console.log( queryString.parse( location.search ) );
    const { q = "" } = queryString.parse( location.search );
    
    

    const [ value, handleInputChange ] = useForm( {
        search: q
    } );

    const heroresFiltered = useMemo(() => getHeroesByName( q ), [ q ])

    const handleClickSubmit = ( e ) => {
        e.preventDefault();
        history.push(`?q=${ value.search }`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr></hr>
            
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr></hr>

                    <form>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete = "off"
                            name = "search"
                            value = { value.search}
                            onChange = { handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick = { handleClickSubmit }
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    { 
                        (  q === "") && <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    { 
                        (  q !== "" && heroresFiltered.length === 0) && <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }

                    {
                        heroresFiltered.map( hero => {
                            return <HeroCard 
                                key = {hero.id }
                                { ...hero }
                            />
                        })
                    }

                </div>
            </div>
        </div>
    )
}
