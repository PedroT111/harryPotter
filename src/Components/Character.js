import React from "react";
import '../Styles/character.css'


const Character = (props) => {
    let {character} = props;
    console.log('characrers', character)
    return(
        <>
        <div className="card card-ch" key={character.id}>
            <div>
                <img src={character.image} className="card-img-top" style={{widt:'100%', height:'300px'}} alt='..'/>
                <div className="name">
                    <h3 className="fs-6 text-center text-dark mt-2">{character.character}</h3>
                </div>
            </div>
        </div>
        </>
    )
}
export default Character;