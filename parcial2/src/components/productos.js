import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cafe from './producto';
import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';

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
                                <th scope="col"><FormattedMessage id="Prod_name" /></th>
                                <th scope="col"><FormattedMessage id="Prod_type" /></th>
                                <th scope="col"><FormattedMessage id="Prod_region" /></th>
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

