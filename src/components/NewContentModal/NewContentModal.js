import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";

function NewContentModal(props) {

    const { show, handleClose } = props;
    const [name, setName] = useState("");


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
                            <Form.Control type="file" accept="image/*"  />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Add artwork
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewContentModal;


