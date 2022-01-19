import React, { useEffect, useState } from "react";
import axios from 'axios';
import Character from "../Components/Character";
import '../Styles/characters.css'
import Pagina from '../Components/Pagination';
import Spinner from "../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersAction } from "../store/actions/Characters";

const Characters =  () => {
    const[currentPage, setCurrentPage] = useState(1);
    const[charactersPerPage] = useState(8);
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    /*----------------------------------------------------*/
    const loading = useSelector(state => state.characters.loading)
    const Characters = useSelector(state => state.characters.characters)
   const CurrentCharacters = Characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCharacters = () => dispatch(getCharactersAction());
        getCharacters();
    },[dispatch]);
   /*------------------------------------------------------*/

    return(
        <>
        {loading ? (<Spinner/>): null}
        <div className="conteiner py-4 position-relative">
        <div className="characters">
        {
            Characters === 0 ? console.log("No hay personajes") : (
                CurrentCharacters.map(character => (
                    <div className="grid-item">
                         <Character
                        character ={character}
                        key={character.id}/>
                    </div>
                )                   
            )
            )
        }
        </div> 
        <Pagina
        paginate={paginate}
        totalCharacters={23}
        charactersPerPage={charactersPerPage}
        />       
        </div>
        </>
    )
}

export default Characters;