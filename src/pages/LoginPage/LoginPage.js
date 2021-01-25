import React, { useState } from 'react';
import { Form, Button, Container,Alert } from 'react-bootstrap';
import './LoginPage.css';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router-dom';


function LoginPage(props) {

    const [email, setEmail]= useState("rev@rev.com")
    const [pwd, setPwd]= useState("1234")
    const {onLogin} = props;
    const [redirectToArtist, setRedirectToArtist] = useState(false);
    const [redirectToOwner, setRedirectToOwner] = useState(false);
    const [showLoginError, setShowLoginError] = useState(false);
    // const [email, setEmail]= useState("");
    // const [pwd, setPwd]= useState("");

    async function logIn (){
        // Pass the username/email and password to logIn function
        try{
        const Parseuser= await Parse.User.logIn(email,pwd);
        const user= new UserModel(Parseuser);
        onLogin(user);
        //check role value for redirect:
        if (user.role==="artist"){
            setRedirectToArtist(true);
        }
        if (user.role==="galleryOwner"){
            setRedirectToOwner(true);
        }
       
       } catch(error){
        console.error("Error while logging in , " + error);
        setShowLoginError(true);  
    }  
        
    }
    //Redirection acording to role:
    if (redirectToOwner) {
        return <Redirect to="/GalleryOwner"/>;
    }

    if (redirectToArtist) {
        return <Redirect to="/ArtistGalleries"/>;
    }


    return (
        <div className="p-login">
        <Container>
        {showLoginError ? <Alert variant="danger">Invalid Credentials!</Alert> : null}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value ={email} onChange={e=> setEmail (e.target.value)} placeholder="Enter email" />
                   
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