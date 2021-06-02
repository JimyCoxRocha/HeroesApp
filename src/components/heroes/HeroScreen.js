import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { obtainPublisherPage } from '../../helpers/obtainPublisherPage';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
    const [ , obtainLocalStorage ] = useLocalStorage();
    
    const { heroId } = useParams();
    
    const hero = useMemo( () => getHeroesById( heroId ), [ heroId ] );
    
    if ( !hero ){
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    const handleReturn= () => {
        let publisherPage = obtainPublisherPage(publisher);
        
        ( obtainLocalStorage( "pageBefore" ) === "SearchScreen" ) ? history.goBack() : history.push(`/${publisherPage}`);

        /* console.log("El valor: "+ );

       
       history.push(`/${publisherPage}`); */
        
    }

    
    return (
        <div clas="row mt-5">
            <div className="col-4">
                <img 
                src={`../assets/heroes/${ heroId }.jpg`}
                className="img-thumbnail"
                alt={ superhero }
                />
            </div>

            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego: </b> { alter_ego }</li>
                    <li className="list-group-item"> <b>Publisher: </b> { publisher }</li>
                    <li className="list-group-item"> <b>First appearance: </b> { first_appearance }</li>
                </ul>

                <h5> Characters: </h5>
                <p> { characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
