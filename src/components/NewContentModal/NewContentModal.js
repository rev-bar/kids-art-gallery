import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";

function NewContentModal(props) {

    const { show, handleClose } = props;
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

    return (
                    
        <Modal show={show} onHide={handleClose} size="xl" className="c-new-recipe-modal">
            <Modal.Header closeButton>
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
                <Button variant="primary" onClick={closeModal}>
                    Add artwork
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewContentModal;


