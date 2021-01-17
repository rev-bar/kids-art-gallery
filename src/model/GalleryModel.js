class GalleryModel {
    constructor(gallery){
        this.id=gallery.id;
        this.name=gallery.get("name");
        this.createdAt=gallery.get("createdAt");
        this.createdBy=gallery.get("createdBy");
    }
}

export default GalleryModel; 