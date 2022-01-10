import React, { useEffect, useState } from "react";
import axios from 'axios';
import Character from "../Components/Character";
import '../Styles/characters.css'
import Pagina from '../Components/Pagination';


const URL_CHARACTERS = 'http://hp-api.herokuapp.com/api/characters/';

const Characters =  () => {
    const[characters, setCharacters] = useState(null);
    const[currentPage, setCurrentPage] = useState(1);
    const[charactersPerPage, setCharactersPerPage] = useState(8);

    const getData = async () => {
            let {data: personajes} = await axios(URL_CHARACTERS);
            setCharacters(personajes);
    }
    
    useEffect(() => {
        getData();
    }, []);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacter = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <>
        <h1>Personajes</h1>
        <div className="conteiner py-4 position-relative">
        {
            currentCharacter.map(character =>
                <Character
                character = {character}
                key={character.name}/>
            )
        }
        <Pagina
        totalCharacters = {40}
        charactersPerPage={charactersPerPage}
        paginate={paginate}
        />
        </div>
        </>
    )
}

export default Characters;