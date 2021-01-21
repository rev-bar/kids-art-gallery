
import { useEffect,useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ArtistCard.css';

function ArtistCard(props) {

    const {artist} = props;
    const [about, setAbout] = useState("");

    // console.log(artist);

    useEffect( ()=>{
        if ((artist !== null) && (artist.aditionalData) ) {
            // console.log(artist.aditionalData.about);
            setAbout(artist.aditionalData.about);
            // console.log(about);
        }
    },[artist])
    


    return (
        <div className="c-artist-card">
            <Card>
            <Card.Body>                 
                {artist? <Card.Title className="name"> {artist.username}</Card.Title > : null }
                
                {artist? <Card.Title className="about"> {about}</Card.Title> : null }
            </Card.Body>
            <Button href= "#" variant="primary" > Edit </Button>
        </Card>
        </div>
    );
}

export default ArtistCard;