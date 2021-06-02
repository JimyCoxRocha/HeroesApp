import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    const [ createLocalStorage ] = useLocalStorage();
    createLocalStorage("pageBefore", "DcScreen");
    return (
        <div>
            <h1>DC Screen</h1>
            <HeroList publisher = { "DC Comics"} />
        </div>
    )
}
