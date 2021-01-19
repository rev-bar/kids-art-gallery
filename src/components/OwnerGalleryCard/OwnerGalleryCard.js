
import { Card, Button } from 'react-bootstrap';
import './OwnerGalleryCard.css';

function OwnerGalleryCard(props) {

    const {gallery, artist} = props;
    

    return (
        <div className="c-owner-gallery-card">
        <Card>
            <Card.Body>
                <Card.Title>{gallery.name}</Card.Title>
                {artist[0]?  <Card.Title> by  {artist[0].username}</Card.Title> : null }
            </Card.Body>
            <Button href= "#" variant="primary" > Edit </Button>
        </Card>

    </div>
    );
}

export default OwnerGalleryCard;