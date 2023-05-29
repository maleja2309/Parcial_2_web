import React, { useState, useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";

const Auth = () => {

    var user_ = null;
    var pass_ = null;

    const [auth, setAuth] = useState([]);

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');


    const handleChangeUser = (event) => {
        // 👇 Get input value from "event"
        setUser(event.target.value);
    };

    const handleChangePass = (event) => {
        // 👇 Get input value from "event"
        setPass(event.target.value);
    };

    const getValues = () => {
        user_ = user;
        pass_ = pass;

    };

    const URL = "http://localhost:3001/login";
    useEffect(() => {
        fetch(URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                login: user.value,
                password: pass.value
            })
        }).then(data => data.json()).then(data => {
            setAuth(data);
        })
    }, [auth.status]);
    console.log(auth);

    return (
        <Container>
            <div align="left">
                <h4>Inicio de sesión</h4>
                <br></br>
                <Col>
                    <div align="center">
                        <Card border="dart" style={{ width: 500 }}>
                            <div className="mb-3">
                                <label><FormattedMessage id="Auth_user" /></label>
                                <input
                                    id="user"
                                    name="user"
                                    style={{ width: 300 }}
                                    type="email"
                                    onChange={handleChangeUser}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label><FormattedMessage id="Auth_pass" /></label>
                                <input
                                    id="pass"
                                    style={{ width: 300 }}
                                    type="password"
                                    onChange={handleChangePass}
                                    className="form-control"
                                />
                            </div>

                            <div >
                                <Row style={{ width: 300 }}>
                                    <Col>
                                        <button type="submit" className="btn btn-success"
                                            onClick={getValues}>
                                            <Link to={"/cafes/"}><FormattedMessage id="Auth_sign_in" /></Link>

                                        </button>
                                    </Col><Col>
                                        <button type="submit" className="btn btn-danger">
                                            <FormattedMessage id="Auth_calcel" />
                                        </button>
                                    </Col>
                                </Row>

                            </div>

                        </Card>

                    </div>
                </Col>
            </div >
        </Container >
    )
}



export default Auth;

