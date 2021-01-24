// import { useState ,useEffect} from "react";
import { Button, Modal ,Form, Image, Row} from "react-bootstrap";
import './PictureModal.css';

function PictureModal(props) {

    const {artwork} = props
    const { show, handleClose } = props;

    function closeModal(){
        handleClose();
    }
    
    return (
                   
        <Modal show={show} onHide={handleClose} size="xl" className="c-large-pic-modal">
            <Modal.Body>
                <Form.Group  controlId="largePic">
                <Image src={artwork} rounded />
                </Form.Group>
                <Row>
                    <Button variant="secondary" onClick={closeModal} >
                        Close
                    </Button>
                </Row>
   
            </Modal.Body>
          
        </Modal>
    );
}

export default PictureModal;