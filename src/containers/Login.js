import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import  Button from "react-bootstrap/Button";
import axios from "axios";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        //tomar el username = email y el pwd 
        //hacer un get.
        //si nos devuelve un json con los datos del usuario
        //entonces es un usuario valido
        //si no, mostrar mensaje de error.
        axios.post('https://localhost:5001/api/User/Auth', {
            username: email,
            password: password
        })
        .then((res) => {
            if (res.status === 200) {
                console.log('Usuario valido');
                return true;
            }
        })
        .catch((err) => {
            console.log('usuario no valido');
            console.log(err);
        })
        // return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      autoFocus
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      />
                </Form.Group>
                <Button block size="lg" type="submit" onClick={validateForm}>
                  Login
                </Button>
            </Form>
        </div>
    );
}