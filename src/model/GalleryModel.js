class GalleryModel {
    constructor(gallery){
        this.id=gallery.id;
        this.name=gallery.get("name");
        this.createdAt=gallery.get("createdAt");
        this.createdBy=gallery.get("createdBy");
        this.artist=gallery.get("artist");
        this.parsegallery=gallery;
    }
}

export default GalleryModel; 