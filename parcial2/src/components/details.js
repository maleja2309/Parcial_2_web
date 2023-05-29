import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Productos from "./productos";
import Container from 'react-bootstrap/Container';
import { FormattedMessage } from 'react-intl';

const { useEffect } = require("react");

function Details() {
    const params = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/cafes/" + params.id;
        fetch(URL).then(data => data.json()).then(data => {
            setProduct(data);
        })
    }, [params.id]);

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Productos />
                    </Col>

                    <Card border="dart" style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Text>
                                {product.nombre}
                            </Card.Text>
                            <Card.Text>
                                {product.fecha_cultivo}
                            </Card.Text>
                            <img
                                src={product.imagen}
                                width="80%" />
                            <Card.Text>
                                <FormattedMessage id="Deta_notes" />
                            </Card.Text>
                            <Card.Text>
                                {product.notas}

                            </Card.Text>
                            <Card.Text>
                                <FormattedMessage id="Deta_grow" /> {product.altura} msnm
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Row>
            </Container>
        </div >
    );
}

export default Details;