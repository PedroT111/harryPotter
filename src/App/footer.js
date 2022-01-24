import React from "react";
import { Container, Row, Col } from "reactstrap";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import '../Styles/footer.css'

const Footer = () => {
    return(
        <Container fluid>
            <Row className="justify-content-center text-light">
                <Col md={10} className="d-flex justify-content-between p-4">
                <div className="followme">
                    <a href="https://linkedin.com/in/pedrochincolla" 
                       target='_blank' 
                       rel="noreferrer"
                       className="links">
                        <BsLinkedin size='20'/> Linkedin 
                        </a>
                    <a href="https://github.com/PedroT111" 
                       target='_blank' 
                       rel="noreferrer"
                       className="links">
                        <FaGithubSquare size='25'/> GitHub 
                        </a>                      
                </div>
                <div>
                    <span>Pedro Chincolla © 2022</span>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;