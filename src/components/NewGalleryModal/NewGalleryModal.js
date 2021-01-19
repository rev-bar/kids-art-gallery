import { useState } from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";

function NewGalleryModal(props) {
    const {artists} = props
    const { show, handleClose, addContent } = props;
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    ;


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
    //rendering artists selection options:
    let selectOptions = [];
    if(artists.length >= 1 ){
        selectOptions = artists.map ((artist, index) =>  <option value = {artist.username} key= {artist.id} >{artist.username}</option> );
    }
    
    function artistPicked(e){
        let index = e.target.value;
        setArtist (index);
      
    }



    
    return (
                   
        <Modal show={show} onHide={handleClose} size="l" className="c-new-recipe-modal">
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
                    <select value = {artist} onChange={artistPicked } >
                        {selectOptions}
                    </select>
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