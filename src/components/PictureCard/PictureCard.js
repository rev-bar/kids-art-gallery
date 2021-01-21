import { useState } from 'react';
import { Card } from 'react-bootstrap';
import PictureModal from '../PictureModal/PictureModal';
import './PictureCard.css';

function PictureCard(props) {

    const {artwork} = props;
    const [showModal, setShowModal] = useState(false);
//    const img= "https://s3.eu-west-1.amazonaws.com/assets.dogandcatwelfare.eu/live/static/img/footer-dogs.1b3bd615d769.png"
//     const picName= "pic name temp"
//     const picText= "Temp pic Text"

// console.log (artwork.img);

    return (
        <div className="c-pic-card">
            <Card>
                <Card.Body>
                    <Card.Title>{artwork.name}</Card.Title>
                    {/* <Card.Text>
                    picText
                    </Card.Text> */}
                </Card.Body>
                <Card.Img variant="bottom" src={artwork.img} onClick={() => setShowModal(true)}/>
           </Card>
           <PictureModal show={showModal} handleClose={() => setShowModal(false)} artwork={artwork.img}/>
        </div>

    );
}

export default PictureCard;








