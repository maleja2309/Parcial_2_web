import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cafe from './producto';
import fondo from '../images/fondo.jpg';
import Table from 'react-bootstrap/Table';
import React, { useState } from "react";
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

        <div>
            <h1>El aroma mágico</h1>
            <div className="text-center">
                <img
                    src={fondo}
                    alt="El arooma mágico"
                    width="80%"
                />
            </div>
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
        </div>)
}

export default Productos;

