import {
    GET_CHARACTERS_SUCCESSFUL,
    GET_CHARACTERS_ERROR,
    GET_CHARACTERS_LOADING,
    FILTER_CHARACTERS_BY_HOUSE
} from '../types/Characters';
import axios from 'axios';
import Swal from 'sweetalert2';
const URL_CHARACTERS = 'https://fedeperin-harry-potter-api.herokuapp.com/personajes/';
//Get characters
export function getCharactersAction(){
    return async (dispatch) => {
        dispatch(getCharacters());
        try{
            setTimeout(async () => {
                const res = await axios.get(URL_CHARACTERS);
                dispatch(getCharactersSuccessful(res.data));               
            }, 6000)            
        }
        catch(e){
            dispatch(getCharactersError());
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong!'
            })
        }
    } 
}
const getCharacters = () => ({
    type: GET_CHARACTERS_LOADING,
    payload: true,
})
const getCharactersSuccessful = (characters) => ({
    type: GET_CHARACTERS_SUCCESSFUL,
    payload: characters
});
const getCharactersError = () => ({
    type: GET_CHARACTERS_ERROR,
    payload: true
})

//Filter Characters
export function filterCharactersAction(characters, house){
    return (dispatch) => {
        dispatch(filterCharacters(characters, house));
    }
}

const filterCharacters = (characters, house) => ({
    type: FILTER_CHARACTERS_BY_HOUSE,
    payload:{
        items: house === '' ? characters : characters.filter(h => h.casaDeHogwarts === house),
        house: house
    }
})