import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage(props) {

    // const [email, setEmail]= useState("revital@revital.com")
    // const [pwd, setPwd]= useState(1234)

    const [email, setEmail]= useState("");
    const [pwd, setPwd]= useState("");

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value ={email} onChange={e=> setEmail (e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value ={pwd} onChange={e=> setPwd (e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="button">
                    Submit
                </Button>
            </Form>
        </Container>

    );
}

export default LoginPage;