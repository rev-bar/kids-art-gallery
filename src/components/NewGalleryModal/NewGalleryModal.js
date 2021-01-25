import { useState ,useEffect} from "react";
import { Button, Modal ,Form, Col, Row} from "react-bootstrap";
import Parse from 'parse';
import './NewGalleryModal.css';

function NewGalleryModal(props) {
    const {artists} = props
    const { show, handleClose, addContent } = props;
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
   
    const currentUser= Parse.User.current(); 
    const filteredArtists= artists.filter(artist=> artist.parentId.id===currentUser.id );
    
    console.log(filteredArtists);
   
    useEffect( ()=>{
        if (artists.length >=1 && filteredArtists.length >= 1){ 
            setArtist (filteredArtists[0].username);
        }

    },[artists])

    function closeModal(){
        setName("");
        if (artists.length >=1 && filteredArtists.length >= 1){ 
            setArtist (filteredArtists[0].username);
        }
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
    
        selectOptions = filteredArtists.map ((artist, index) =>  <option value = {artist.username} key= {artist.id} >{artist.username}</option> );
  
    }
    
    function artistPicked(e){
        let index = e.target.value;
        setArtist (index);
      
    }



    
    return (
                   
        <Modal show={show} onHide={handleClose} size="xl" className="c-new-gallery-modal">
            <Modal.Header closeButton>
                <Modal.Title>New gallery</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Gallery Name
                    </Form.Label>
                    <Col sm={8}>
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