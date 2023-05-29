import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import fondo from '../images/fondo.jpg';
import Container from 'react-bootstrap/Container';
import { MDBFooter } from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <Container>
                <div align="left">
                    <h1>El aroma mágico</h1>
                </div>
                <br></br>
                <Row className="justify-content-md-center">
                    <img
                        src={fondo}
                        alt="El aroma mágico"
                        width="80%" />
                </Row>
                <br></br>
            </Container>
        </div>
    )
}

export default Header;
