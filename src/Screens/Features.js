import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Feature from "../Components/Feature";
import Spinner from "../Components/Spinner";
import { getCharacterByIdAction } from "../store/actions/Features";

const Features = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        const getById = () => dispatch(getCharacterByIdAction(id))
        getById();
    }, [dispatch, id])

    const character = useSelector(state => state.features.character);
    const loading = useSelector(state => state.features.loading);

    return(
        <>
        <Container>
            <Row className="d-flex justify-content-center mt-3">
                {loading ? <Spinner/> : (
                    <Feature
                    className="mx-auto"
                    character={character}
                    />
                )}
            </Row>
        </Container>
        </>
    )
}

export default Features;