import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";


function AddArtistModal(props) {
    const { show, handleClose, addContent } = props;
    const [artistName, setArtistName] = useState("");
    const [about, setAbout] = useState("");

    function closeModal(){
        setArtistName("");
        setAbout("");
        handleClose();
    }
    
    function handleAddContent() {
        // 1) triggers addContent at GalleryOwnerArtistPage that will then add this content to its artists state
        addContent(artistName, about);

        // 2) cleanup (clean all field + close the modal)
        closeModal();
    }


    return (
    
        <Modal show={show} onHide={handleClose} size="xl" className="c-new-recipe-modal">
        <Modal.Header closeButton>
            <Modal.Title>New artist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Artist Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Artist Name" value={artistName} onChange={e => setArtistName(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalImage">
                    <Form.Label column sm={2}>
                        About the artist
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="About the artist" onChange={e => setAbout(e.target.value)}  />
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

export default AddArtistModal;