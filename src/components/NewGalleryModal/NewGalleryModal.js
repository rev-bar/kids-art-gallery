import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";

function NewGalleryModal(props) {

    const { show, handleClose, addContent } = props;
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");

    function closeModal(){
        setName("");
        setArtist("");
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
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Gallery Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Gallery Name" value={name} onChange={e => setName(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalArtist">
                    <Form.Label column sm={2}>
                        Artist Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Artist Name" value={artist} onChange={e => setArtist(e.target.value)} />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAddContent}>
                    Add gallery
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewGalleryModal;