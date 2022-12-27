import axios from 'axios';
import Swal from 'sweetalert2';
import { GET_CHARACTER_BY_ID, GET_CHARACTER_BY_ID_ERROR, GET_CHARACTER_BY_ID_SUCCESSFUL} from '../types/Features';
const URL_CHARACTERS = 'https://harry-potter-api-en.onrender.com/characters/';
export function getCharacterByIdAction(id){
    return async (dispatch) => {
        dispatch(getCharacter());
        try{
            setTimeout(async () => {
                const res = await axios.get(URL_CHARACTERS + id);
                dispatch(getCharacterByIdSuccessful(res.data)); 
            }, 3000)                   
        }
        catch(e){
            dispatch(getCharacterByIdError());
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong!'
            })
        }
    }
}

const getCharacter = () => ({
    type: GET_CHARACTER_BY_ID,
    payload: true
});
const getCharacterByIdSuccessful = (character) => ({
    type: GET_CHARACTER_BY_ID_SUCCESSFUL,
    payload: character
});
const getCharacterByIdError = () => ({
    type: GET_CHARACTER_BY_ID_ERROR,
    payload: true
})
