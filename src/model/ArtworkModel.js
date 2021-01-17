class ArtworkModel {
    constructor(artwork){
        this.id=artwork.id;
        this.name=artwork.get("name");
        this.createdAt=artwork.get("createdAt");
        this.createdBy=artwork.get("createdBy");
        this.img=artwork.get("artwork").url();
        this.galleryId=artwork.get("galleryId");

    }

}

export default ArtworkModel; 