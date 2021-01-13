
import { useContext } from 'react';
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';
import ActiveUserContext from '../../shared/ActiveUserContext';

import './GalleryOwnerPage.css';


function GalleryOwnerPage(props) {
    const {onLogout} = props;
    const acstiveUser= useContext(ActiveUserContext);

    if (acstiveUser) {
        console.log (acstiveUser);
    }

    
    return (
        <div>
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <p>GalleryOwnerPage</p>
        </div>
    );
}

export default GalleryOwnerPage;