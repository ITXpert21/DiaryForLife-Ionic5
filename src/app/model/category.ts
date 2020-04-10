export  class  Category {

    ID: number;
    name : string;
    services : any;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}