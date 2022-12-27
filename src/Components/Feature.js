import React from "react";
import '../Styles/features.css'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col } from 'reactstrap';

const Feature = (props) => {
    const {character} = props
    console.log(props)
    return(
            <Col md={10}>
            <Card className="d-flex card-feature text-light">
                <CardImg className='mx-auto' src={character.image} style={{height:'300px',width:'250px'}}  alt="Card image" />
                <CardBody className="body-feature px-4">
                <CardTitle className="fs-2">{character.character}</CardTitle>
                <CardSubtitle className="fs-5 mb-4">Apodo: {character.nickname}</CardSubtitle>
                <CardText className="mt-2 fs-6">
                    Actriz/Actor: {character.interpretedBy} <br/>
                    House: {character.hogwartsHouse}
                    {
                        character.hogwartsStudent ? (
                            <p>Estudiante de Hogwarts</p>
                        ) : null
                    }
                </CardText>
                </CardBody>
            </Card>
            </Col>
    )
}
export default Feature;