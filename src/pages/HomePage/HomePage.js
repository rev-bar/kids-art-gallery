import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './HomePage.css';

function HomePage(props) {
    const {onLogout} = props;
    const activeUser= useContext(ActiveUserContext);

    return (
        <div>
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <p>HomePage</p>
        </div>
    );
}

export default HomePage;