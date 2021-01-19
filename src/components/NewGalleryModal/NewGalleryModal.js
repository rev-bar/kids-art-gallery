import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";

function NewGalleryModal(props) {

    const { show, handleClose, addContent } = props;
    const [name, setName] = useState("");
    const [artist, setArtist] = useState(null);

    function closeModal(){
        setName("");
        setArtist(null);
        handleClose();
    }

    function handleAddContent() {
        // 1) triggers addContent at GalleryOwnerPage that will then add this content to its galleries state
        addContent(name, artist);

        // 2) cleanup (clean all field + close the modal)
        closeModal();
    }

    return (
                   
        <Modal show={show} onHide={handleClose} size="xl" className="c-new-recipe-modal">
            <Modal.Header closeButton>
                <Modal.Title>New gallery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                form
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={closeModal}>
                    Add gallery
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewGalleryModal;