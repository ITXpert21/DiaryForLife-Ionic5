export  class  Post {

    post_id: number;
    post_author : number;
    token : string;
    post_title : string;
    post_date : string;
    post_content : string;
    services : [];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}