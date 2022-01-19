import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCharactersAction } from "../store/actions/Characters";
import '../Styles/filter.css'

const Filter = () => {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.characters);
    const filter = () => {

    }
    return(
        <>
        <div className="conteiner-filter row mt-3">
                    <label className="text-light">
                    Filter by House
                    <select className="form-control filter-select" onChange={(e) => dispatch(filterCharactersAction(characters, e.target.value))}>
                        <option value=''>All</option>
                        <option value='Gryffindor'>Gryfindor</option>
                        <option value='Slytherin'>Slitheryn</option>
                        <option value='ninguna'>None</option>
                    </select>
                    </label>

                </div>      
        </>
    )
}

export default Filter;