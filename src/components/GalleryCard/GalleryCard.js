import { Card } from 'react-bootstrap';
import './GalleryCard.css';

function GalleryCard(props) {

    const {gallery, artworks} = props;

    return (
        <div className="c-gallery-card">
        <Card>
            <Card.Body>
                <Card.Title>{gallery.name}</Card.Title>
            </Card.Body>
            <Card.Img variant="bottom" src={artworks[0].img} />
            <Button variant="primary">Go to {gallery.name} </Button>
        </Card>

    </div>
    );
}

export default GalleryCard;












