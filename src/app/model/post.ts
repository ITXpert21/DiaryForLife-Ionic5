export  class  Post {

    post_id: number;
    post_author : number;
    token : string;
    post_title : string;
    post_date : string;
    post_content : string;
    post_picture : string;
    post_video : string;
    post_medical : string;
    post_age : string;
    post_treatment : string;
    post_selectDate : string;
    post_name : string;
    post_relation : string;
    post_diagnosis : string;

    selectDate : string;
    age : string;
    business_name : string;
    doctor : string;
    phone : string ;
    typedoctor : string;
    address : string;
    weight : string;
    height : string;
    blood_pressure : string;
    pulse : string;
    diagnosis : string;
    comment : string;    

    hos_selectDate : string;
    hos_age : string;
    hospital : string;
    hos_phone : string;
    hos_doctor : string ;
    hos_typedoctor : string;
    hos_address : string;
    hos_treatment : string;
    hos_reason : string;
    hos_stay : string;
    hos_diagnosis : string;
    hos_comment : string;
    things_selectDate : string;
    things_comment : string;

    weight_selectDate : string;
    weight_age : string;
    weight_log : string;
    height_log : string;
    weight_comment : string;

    cholesterol_selectDate : string;
    cholesterol_ldl : string;
    cholesterol_hdl : string;
    cholesterol_total : string;
    cholesterol_comment : string;

    blood_selectDate : string;
    blood_systolic : string;
    blood_diastolic : string;
    blood_hr : string;
    blood_comment : string;

    vaccination_selectDate : string;
    vaccination : string;
    vaccination_comment : string;

    allergy_selectDate : string;
    allergy : string;
    allergy_comment : string;
    eye_selectDate : string;
    eye_doctor : string;
    eye_phone : string;
    eye_address : string;
    eye_result : string;
    eye_comment : string;

    dental_selectDate : string;
    dental_doctor : string;
    dental_phone : string;
    dental_address : string;
    dental_result : string;
    dental_comment : string;    

    info_birth : string;
    info_bloodtype : string;
    info_phone : string;
    info_address : string;
    info_firstused : string;
    info_comment : string;       
    services : [];
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}