import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Signup.css"


export default function SignUp() {
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        //Post al endpoint para dar de alta un nuevo usuario.
        axios.post('https://localhost:5001/api/User', {
            username: username,
            password: password
        })
        .then((res) => {
            if(res.status === 201){
                console.log('Usuario Registrado');
                //Mandar a pagina de Login
                return true;
            }
        })
        .catch((err) => {
            console.log('ocurrio un error al registrar usuario');
            console.log(err);
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

        return (
            <div>
                <h3>Sign Up / Registrarse</h3>

                <div className="SignUp">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="fName">
                            <Form.Label>First Name / Nombre(s)</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={fName}
                                onChange={(e) => setfName(e.target.value)}
                                />
                        </Form.Group>
                        <Form.Group size="lg" controlId="lName">
                            <Form.Label>Last Name / Apellido(s)</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={lName}
                                onChange={(e) => setlName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username / Nombre de usuario</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password / Contraseña</Form.Label>
                            <Form.Control
                                autoFocus
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" onClick={validateForm}>
                            Register
                        </Button>
                        <p className="forgot-password">
                            Already registered <a href="/login">sign in?</a>
                        </p>
                    </Form>
                </div>
            </div>
        );
}