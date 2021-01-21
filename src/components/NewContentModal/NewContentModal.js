import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";
import './NewContentModal.css';

function NewContentModal(props) {

    const { show, handleClose, addContent } = props;
    const [name, setName] = useState("");
    const [artwork, setArtwork] = useState(null);


    function closeModal(){
        setName("");
        setArtwork(null);
        handleClose();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setArtwork(e.target.files[0]);
        } else {
            setArtwork(null);
        }
    }


    function handleAddContent() {
        // 1) triggers addContent at GalleryPage that will then add this content to its artworks state
        addContent(name, artwork);

        // 2) cleanup (clean all field + close the modal)
        closeModal();
    }

    return (
                    
        <Modal show={show} onHide={handleClose} size="xl" className="c-new-artwork-modal">
            <Modal.Header>
                <Modal.Title>New artwork</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Artwork Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Artwork Name" value={name} onChange={e => setName(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalImage">
                        <Form.Label column sm={2}>
                            Artwork Image
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAddContent}>
                    Add artwork
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewContentModal;


