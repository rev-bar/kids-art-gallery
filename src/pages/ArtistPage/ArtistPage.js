
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import { Card ,Button} from 'react-bootstrap';
import { useContext } from 'react';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Redirect } from 'react-router-dom';
import './ArtistPage.css';

function ArtistPage(props) {
    const {onLogout} = props;
    const activeUser= useContext(ActiveUserContext);
   
    if (!activeUser) {
        return <Redirect to="#/"/>
    }

    return (
        <div >
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <div className="p-aboutArtist">
            <Card >
                <Card.Header>{activeUser.username}</Card.Header>
                <Card.Body>
                    <Card.Title>{activeUser.aditionalData.about}</Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}

export default ArtistPage;