import React from "react";
import '../Styles/character.css'


const Character = (props) => {
    let {character} = props;
    return(
        <>
        <div className="card mb-4">
            <div>
                <img src={character.image} className="card-img-top" style={{widt:'100%', height:'300px'}} alt='..'/>
                <div>
                    <h3 className="fs-6 mt-3 px-3 d-inline-block">{character.name}</h3>
                </div>
            </div>
        </div>
        </>
    )
}
export default Character;