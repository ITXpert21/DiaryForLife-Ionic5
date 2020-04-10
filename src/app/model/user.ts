export  class  User {

    user_id: number;
    username : string;
    token : string;
    first_name: string;
    last_name: string;
    email: string;    
    password: string;  
    type : string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}