
import { Card, Button } from 'react-bootstrap';
import './ArtistCard.css';

function ArtistCard(props) {

    const {artist} = props;

    // console.log(artist);

    return (
        <div className="c-artist-card">
            <Card>
            <Card.Body>                 
                {artist? <Card.Title className="name"> {artist.username}</Card.Title > : null }
                {artist? <Card.Title className="about"> {artist.about}</Card.Title> : null }
            </Card.Body>
            <Button href= "#" variant="primary" > Edit </Button>
        </Card>
        </div>
    );
}

export default ArtistCard;