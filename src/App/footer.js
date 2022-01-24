import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return(
        <Container flui className="">
            <Row className="justify-content-center text-light">
                <Col md={10} className="d-flex justify-content-between p-4">
                <div>
                    <a href="" class="text-white">
                    <i class="fab fa-facebook-f">dwq</i>
                    </a>
                    <a href="" class="text-white">
                    <i class="fab fa-twitter">dwqdwq</i>
                    </a>
                </div>
                <div>
                    <span>Pedro Chincolla</span>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;