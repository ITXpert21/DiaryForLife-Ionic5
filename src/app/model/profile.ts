export  class  Profile {

    user_id: number;
    token : string;
    first_name: string;
    last_name: string;
    email: string;    
    password: string;  
    type : string;
    userImage : string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}