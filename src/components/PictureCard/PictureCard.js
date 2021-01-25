import { useState } from 'react';
import { Card,Button,Image, Row } from 'react-bootstrap';
import PictureModal from '../PictureModal/PictureModal';
import './PictureCard.css';

function PictureCard(props) {

    const {artwork, deleteArtwork} = props;
    const [showModal, setShowModal] = useState(false);
//    const img= "https://s3.eu-west-1.amazonaws.com/assets.dogandcatwelfare.eu/live/static/img/footer-dogs.1b3bd615d769.png"
//     const picName= "pic name temp"
//     const picText= "Temp pic Text"

// console.log (artwork.img);

    function deleteThis(){
        deleteArtwork(artwork)
    }



    return (
        <div className="c-pic-card">
            <Card>
                <Card.Body>
                        <Card.Title>{artwork.name}</Card.Title>
                        {/* <Card.Text>
                        picText
                        </Card.Text> */}
                </Card.Body>
                <Card.Img className="artwork" variant="bottom" src={artwork.img} onClick={() => setShowModal(true)}/>
                <Card.Footer className="text-muted">
                  
                    <img className="delete-button" onClick={deleteThis} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7O9DX6yL7LzYYgjvYMYtDv4me4jON3xYJQYIgkd0icfVD3qxX_xuMl4a6skuV_nhl1kTlUtLlv2crezZF71CcvNr1vEkk9Xqxg&usqp=CAU&ec=45761792"></img>
                </Card.Footer>
           </Card>
           <PictureModal show={showModal} handleClose={() => setShowModal(false)} artwork={artwork.img}/>
        </div>

    );
}

export default PictureCard;








