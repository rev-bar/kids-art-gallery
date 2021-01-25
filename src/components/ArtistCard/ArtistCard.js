
import { useEffect,useState } from 'react';
import { Card, Button,Accordion,Image, Row, Form, Col } from 'react-bootstrap';
import './ArtistCard.css';

function ArtistCard(props) {

    // const {artist,deleteArtist, editArtist} = props;
    const {artist, editArtist} = props;
    const [about, setAbout] = useState("");
    const [newAboutArtist, setNewAboutArtist]= useState("");
    const [newArtistName, setNewArtistName]= useState("");

    // console.log(artist);

    useEffect( ()=>{
        if ((artist !== null) && (artist.aditionalData) ) {
            // console.log(artist.aditionalData.about);
            setAbout(artist.aditionalData.about);
            // console.log(about);
        }
    },[artist])
    
    // function deleteThis(){
    //     deleteArtist(artist)
    // }

    function editThis(){
        editArtist (artist,newArtistName,newAboutArtist);

    }

    return (
        <div className="c-artist-card">
            <Accordion>
                <Card>
                    <Card.Body>                 
                        {artist? <Card.Title className="name"> {artist.username}</Card.Title > : null }
                        
                        {artist? <Card.Title className="about"> {about}</Card.Title> : null }
                    </Card.Body>
                    <Row>
                
                        {/* <Button href= "#" variant="danger" onClick={deleteThis} > <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7O9DX6yL7LzYYgjvYMYtDv4me4jON3xYJQYIgkd0icfVD3qxX_xuMl4a6skuV_nhl1kTlUtLlv2crezZF71CcvNr1vEkk9Xqxg&usqp=CAU&ec=45761792" rounded /> </Button> */}
            
                        <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                            edit
                        </Accordion.Toggle>
                    </Row>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={12}>
                                        Artist Name
                                    </Form.Label>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Artist Name" value={newArtistName} onChange={e => setNewArtistName(e.target.value)} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalName">
                                    <Form.Label column sm={12}>
                                        About the artist
                                    </Form.Label>
                                    <Col sm={12}>
                                        <Form.Control as="textarea" rows={3} placeholder="About the artist" value={newAboutArtist} onChange={e => setNewAboutArtist(e.target.value)} />
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

export default ArtistCard;