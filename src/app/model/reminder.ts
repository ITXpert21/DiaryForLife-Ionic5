export  class  Reminder {

    ID: number;
    reminderdate : any;
    remindertime : any;
    services : any;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}