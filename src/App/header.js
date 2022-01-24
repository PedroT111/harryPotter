import React from "react";
import { Link } from "react-router-dom";
import {
    Row,
    Navbar,
    Col,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
 } from 'reactstrap';
 import logo from '../img/logo.png'


const Header = () => {
    return(
        <Container fluid>
            <Row>
                <Col className="d-flex">
                    <div className="mx-auto">
                    <Link to='/'>
                        <img src={logo} style={{width:'100%'}}  alt="logo"/>
                    </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;