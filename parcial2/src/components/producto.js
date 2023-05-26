import React from 'react';
import { Link } from "react-router-dom";

const Cafe = (props) => {
    return (

        <tr>
            <td scope="row">
                <Link to={"/cafes/" + props.title.id}>{props.title.id}</Link></td>
            <td>{props.title.nombre}</td>
            <td>{props.title.tipo}</td>
            <td>{props.title.region}</td>
        </tr >

    );

}

export default Cafe;