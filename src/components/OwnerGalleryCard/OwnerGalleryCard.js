
import { Card, Button,Image, Row } from 'react-bootstrap';
import './OwnerGalleryCard.css';

function OwnerGalleryCard(props) {

    const {gallery, artist,deleteGallery,editGallery} = props;
    
    function deleteThis(){
        deleteGallery(gallery)
    }

    function editThis(){
        editGallery(gallery)
    }

    return (
        <div className="c-owner-gallery-card">
            
        <Card>
            <Card.Body>
                <Card.Title>{gallery.name}</Card.Title>
                {artist?  <Card.Title> by  {artist.username}</Card.Title> : null }
            </Card.Body>
            <Row>
            <Button href= "#" variant="primary" onClick={editThis} > Edit </Button>
            <Button href= "#" variant="danger" onClick={deleteThis} > <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7O9DX6yL7LzYYgjvYMYtDv4me4jON3xYJQYIgkd0icfVD3qxX_xuMl4a6skuV_nhl1kTlUtLlv2crezZF71CcvNr1vEkk9Xqxg&usqp=CAU&ec=45761792" rounded /> </Button>
            </Row>
            
        </Card>

    </div>
    );
}

export default OwnerGalleryCard;