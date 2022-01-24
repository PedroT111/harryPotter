import React, { useEffect, useState } from "react";
import Character from "../Components/Character";
import '../Styles/characters.css'
import Pagina from '../Components/Pagination';
import Spinner from "../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersAction } from "../store/actions/Characters";
import Filter from "../Components/Filter";
import { Link } from "react-router-dom";

const Characters =  () => {
    const[currentPage, setCurrentPage] = useState(1);
    const[charactersPerPage] = useState(8);
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const loading = useSelector(state => state.characters.loading)
    const Characters = useSelector(state => state.characters.filterCharacters)
   const CurrentCharacters = Characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCharacters = () => dispatch(getCharactersAction());
        getCharacters();
    },[dispatch]);

    return(
        <>
        {loading ? (<Spinner/>): null}
        <Filter/>
            <div className="conteiner py-2 position-relative">
            <div className="characters">
            {
                Characters === 0 ? console.log("No hay personajes") : (
                    CurrentCharacters.map(character => (
                        <Link to={`/${character.id}`} className="text-decoration-none">
                        <div className="grid-item">
                                <Character
                                character ={character}
                                key={character.id}/>
                        </div>
                        </Link>
                    )                   
                )
                )
            }
            </div> 
            <Pagina
            paginate={paginate}
            totalCharacters={Characters.length}
            charactersPerPage={charactersPerPage}
            />       
            </div>

        
        </>
    )
}

export default Characters;