import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router-dom';
import './SignUpPage.css';

function SignUpPage(props) {

    const [email, setEmail]= useState("")
    const [pwd, setPwd]= useState("")
    const [username, setUsername]= useState("")
    const {onLogin} = props;
    const [redirectToOwner, setRedirectToOwner] = useState(false);



    async function signIn (){
        try{
            const user = new Parse.User()
            user.set("username", username);
            user.set("email", email);
            user.set("role", "galleryOwner");
            // user.set('picture', new Parse.File("resume.txt", { base64: btoa("My file content") }));
            // user.set('aditionalData', { foo: 'bar' });
            // user.set('parentId', Parse.User.current());
            user.set("password", pwd);
            const newOwnerUser= await user.signUp();
            console.log(user);
            const Parseuser= await Parse.User.logIn(email,pwd);
            const loginuser= new UserModel(Parseuser);
            onLogin(loginuser);
            setRedirectToOwner(true);
            

        } catch(error){
            console.error("Error while logging in , " + error);
        }  
            
        }

        if (redirectToOwner) {
            return <Redirect to="/GalleryOwner"/>;
        }
   
    return (
        <div className="p-signUp">
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value ={username} onChange={e=> setUsername (e.target.value)} placeholder="Enter username" />
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value ={email} onChange={e=> setEmail (e.target.value)} placeholder="Enter email" />
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value ={pwd} onChange={e=> setPwd (e.target.value)} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={signIn}>
                        Submit
                    </Button>
                </Form>
            </Container>
            
        </div>
    );
}

export default SignUpPage;