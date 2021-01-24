
import { useState,useEffect } from 'react';
import { Card, Button,Image, Row,Accordion, Form, Col } from 'react-bootstrap';
import './OwnerGalleryCard.css';

function OwnerGalleryCard(props) {

    const {gallery, artist ,deleteGallery,editGallery, artists} = props;
    const [newGalleryName, setNewGalleryName]= useState("");
    const [newArtistName, setNewArtistName]= useState("");
    
    useEffect( ()=>{
        if (artists.length >= 1){
            setNewArtistName (artists[0].username);
        }

    },[artists])

    function deleteThis(){
        deleteGallery(gallery)
    }

    function editThis(){
        editGallery (gallery,newArtistName,newGalleryName);

    }

    let selectOptions = [];
    if(artists.length >= 1 ){
        selectOptions = artists.map ((artist, index) =>  <option value = {artist.username} key= {artist.id} >{artist.username}</option> );
    }

    function artistPicked(e){
        let index = e.target.value;
        setNewArtistName (index);
      
    }

    return (
        <div className="c-owner-gallery-card">
        <Accordion>  
            <Card>
                <Card.Body>
                    <Card.Title>{gallery.name}</Card.Title>
                    {artist?  <Card.Title> by  {artist.username}</Card.Title> : null }
                </Card.Body>
                <Row>
                
                <Button href= "#" variant="danger" onClick={deleteThis} > <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7O9DX6yL7LzYYgjvYMYtDv4me4jON3xYJQYIgkd0icfVD3qxX_xuMl4a6skuV_nhl1kTlUtLlv2crezZF71CcvNr1vEkk9Xqxg&usqp=CAU&ec=45761792" rounded /> </Button>
               
                    <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                        edit
                    </Accordion.Toggle>
                    </Row>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={12}>
                                        Gallery Name
                                    </Form.Label>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Gallery Name" value={newGalleryName} onChange={e => setNewGalleryName(e.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalArtist">
                                    <Form.Label column sm={12}>
                                        Artist Name
                                    </Form.Label>
                                    <Col sm={12}>
                                        <select value = {newArtistName} onChange={artistPicked } >
                                            {selectOptions}
                                        </select>
                                        </Col>
                                </Form.Group>
                                <Row>
                                    <Button href= "#" variant="link" onClick={editThis} mr-right > send </Button>
                                </Row>
                                
                            </Card.Body>
                        </Accordion.Collapse>
                  
            </Card>
        </Accordion>
    
       
    </div>
    );
}

export default OwnerGalleryCard;