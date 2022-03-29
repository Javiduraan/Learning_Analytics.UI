import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import axios from "axios";
import "./Login.css";
import { useAppContext } from "../Lib/ContextLib";
import {useHistory} from "react-router-dom";
import { onError } from "../Lib/errorLib";

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function sendRequest() {
        axios.post('https://localhost:5001/api/User/Auth', {
            username: email,
            password: password
        })
        .then((res) => {
            if (res.status === 200) {
                // console.log('Usuario valido');
                userHasAuthenticated(true);
                history.push("/");
            }
        })
        .catch((err) => {
            // console.log('usuario no valido');
            console.log(err);
            setIsLoading(false);
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            sendRequest();
        } catch (e) {
            onError(e);
        }
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
                <LoaderButton
                    block
                    size="lg"
                    type="submit"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                Login
                </LoaderButton>
            </Form>
        </div>
    );
}