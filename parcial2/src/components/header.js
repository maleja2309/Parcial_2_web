import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import fondo from '../images/fondo.jpg';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <div >
            <Container>
                <h1>El aroma mágico</h1>
                <br></br>
                <Row className="justify-content-md-center">
                    <img
                        src={fondo}
                        alt="El aroma mágico"
                        width="80%"
                    />
                </Row>
                <br></br>
            </Container>
        </div>)
}

export default Header;
