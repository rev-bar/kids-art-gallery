class ArtworkModel {
    constructor(user){
        this.id=user.id;
        this.name=user.get("name");
        this.createdAt=user.get("createdAt");
        this.createdBy=user.get("createdBy");
        this.img=user.get("artwork").url();
        this.galleryId=user.get("galleryId");

    }

}

export default ArtworkModel; 