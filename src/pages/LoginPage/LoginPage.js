import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './LoginPage.css';
import Parse from 'parse';
import UserModel from '../../model/UserModel';


function LoginPage(props) {

    const [email, setEmail]= useState("rev@rev.com")
    const [pwd, setPwd]= useState("1234")
    const {onLogin} = props;

    // const [email, setEmail]= useState("");
    // const [pwd, setPwd]= useState("");

    async function logIn (){
        // Pass the username/email and password to logIn function
        try{
        const user= await Parse.User.logIn(email,pwd);
        // console.log( new UserModel(user) );
        onLogin(new UserModel(user));

       } catch(error){
        console.error("Error while logging in , " + error);
       }  
        
    }


    return (
        <div className="p-login">
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
                <Button variant="primary" type="button" onClick={logIn}>
                    Submit
                </Button>
            </Form>
        </Container>
        </div>

    );
}

export default LoginPage;