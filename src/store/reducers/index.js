import Characters from '../reducers/Characters';
import Features from './Features';
import { combineReducers } from "redux";


export default combineReducers({
    characters: Characters,
    features: Features,
})