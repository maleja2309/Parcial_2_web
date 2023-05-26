import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
const { useEffect } = require("react");

function Details() {
    const params = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const URL = "http://localhost:3001/cafes/" + params.id;
        fetch(URL).then(data => data.json()).then(data => {
            setProduct(data);
        })
    }, []);
    return (

        <Card style={{ width: '18rem', height: '24rem' }} className="mb-3" >
            <Card.Body>
                <Card.Text>
                    {product.nombre}
                </Card.Text>
                <Card.Text>
                    {product.fecha_cultivo}
                </Card.Text>
                <img
                    src={product.imagen}
                    width="80%"
                />
                <Card.Text>
                    Notas
                </Card.Text>
                <Card.Text>
                    {product.notas}
                </Card.Text>
                <Card.Text>
                    Cultivado a la altura de {product.altura} msnm
                </Card.Text>
            </Card.Body>


        </Card>
    );
}

export default Details;