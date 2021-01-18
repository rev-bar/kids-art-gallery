import { Button, Modal } from "react-bootstrap";

function NewContentModal(props) {

    const { show, handleClose } = props;


    return (
                    
        <Modal show={show} onHide={handleClose} size="xl" className="c-new-recipe-modal">
            <Modal.Header closeButton>
                <Modal.Title>New artwork</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                form
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


