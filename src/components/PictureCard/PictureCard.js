import { Card } from 'react-bootstrap';
import './PictureCard.css';

function PictureCard(props) {

    // const {img,picName,picText} = props;
   const img= "https://s3.eu-west-1.amazonaws.com/assets.dogandcatwelfare.eu/live/static/img/footer-dogs.1b3bd615d769.png"
    const picName= "pic name temp"
    const picText= "Temp pic Text"

    return (
        <div className="c-pic-card">
            <Card>
                <Card.Body>
                    <Card.Title>{picName}</Card.Title>
                    <Card.Text>
                    {picText}
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={img} />
            </Card>

        </div>

    );
}

export default PictureCard;








