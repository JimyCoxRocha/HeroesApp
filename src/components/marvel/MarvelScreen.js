import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    const [ createLocalStorage ] = useLocalStorage();
    createLocalStorage("pageBefore", "MarvelScreen");

    return (
        <div>
            <h1>Marvel Screen</h1>
            
            <HeroList publisher = { "Marvel Comics"} />
        </div>
    )
}
