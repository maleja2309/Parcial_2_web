import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import Productos from "./productos";

const { useEffect } = require("react");

function Details(params) {

    //const params = useParams();
    const [product, setProduct] = useState([]);

    const URL = "http://localhost:3001/cafes/" + params.id;
    fetch(URL).then(data => data.json()).then(data => {
        setProduct(data);
    })

    return (
        <div>
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
        </div >
    );
}

export default Details;