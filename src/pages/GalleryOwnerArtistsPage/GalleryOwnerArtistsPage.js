
import KidsGalleryNavBar from '../../components/KidsGalleryNavBar/KidsGalleryNavBar';

function GalleryOwnerArtistsPage(props) {
    const {onLogout} = props;

    return (
        <div>
            <KidsGalleryNavBar onLogout={onLogout}></KidsGalleryNavBar>
            <p>GalleryOwnerArtistsPage</p>
        </div>
    );
}

export default GalleryOwnerArtistsPage;