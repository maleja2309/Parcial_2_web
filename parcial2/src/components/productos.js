import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Details from './details';
import Container from 'react-bootstrap/Container';
import Cafe from './producto';

import Table from 'react-bootstrap/Table';
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const { useEffect } = require("react");

function Productos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:3001/cafes";
        fetch(URL).then(data => data.json()).then(data => {
            setProductos(data);
        })
    }, []);

    return (
        <Row >
            <Col>
                <div className="container">
                    <table className="table">
                        <thead className={"table-dark"}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Región</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((e, i) => (<Cafe key={i} title={e} />))}
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>
    )
}

export default Productos;

