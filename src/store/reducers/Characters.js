import{
    GET_CHARACTERS_SUCCESSFUL,
    GET_CHARACTERS_ERROR,
    GET_CHARACTERS_LOADING,
    FILTER_CHARACTERS_BY_HOUSE,
} from '../types/Characters';

const initialState = {
    characters: [],
    error: null,
    loading: false,
    filterCharacters: [],
    filter: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case GET_CHARACTERS_LOADING:{
            return{
                ...state, 
                loading: action.payload
            }
        }
        case GET_CHARACTERS_SUCCESSFUL:{
            return{
                ...state,
                characters: action.payload,
                filterCharacters: action.payload,
                error: false,
                loading: false,               
                
            }
        }
        case GET_CHARACTERS_ERROR:{
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case FILTER_CHARACTERS_BY_HOUSE:{
            return{
                ...state,
                filter: action.payload.house,
                filterCharacters: action.payload.items,
            }
        }
        default:
            return state;
    }
}