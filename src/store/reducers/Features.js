import { GET_CHARACTER_BY_ID, GET_CHARACTER_BY_ID_ERROR, GET_CHARACTER_BY_ID_SUCCESSFUL} from "../types/Features"

const initialState = {
    character: [],
    loading: false,
    error: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case GET_CHARACTER_BY_ID:{
            return{
                ...state,
                loading: action.payload,
                error: false
            }
        }
        case GET_CHARACTER_BY_ID_SUCCESSFUL:{
            return{
                ...state,
                character: action.payload,
                loading: false,
                error: false
            }
        }
        case GET_CHARACTER_BY_ID_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
             return state

    }
}