class UserModel {
    constructor(user){
        this.id=user.id;
        this.createdAt=user.get("createdAt");
        this.role=user.get("role");
        this.email=user.get("email");
        this.picture=user.get("picture");
        //add aditional data- about artist

    }

}

export default UserModel; 