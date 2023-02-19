import axios from "axios";

const API_URL = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/run";
const API_URL_GET = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/getAdd";
const API_URL_SET_MEMMORY_VALUE = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/setMemmoryValue";
const API_URL_CLEAR_MEMMORY = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/ClearAll";
const API_URL_SHOW_ALL_PROJECTS = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/GetAllProject";
const API_URL_SAVE_PROJECT = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/SaveCode";
const API_URL_GET_CODE_WITH_ID = "http://assembler-env.eba-y3mfpnv2.us-west-2.elasticbeanstalk.com//api/getcodewithid/";

class JavaApi{

     ApiPost(code){
        return axios.post(API_URL,code);
    }

    ApiGet(address){
        //let add = address.toString();
        return axios.post(API_URL_GET,address);
    }
    ApiSetMemmoryValue(JsonValue){
        return axios.post(API_URL_SET_MEMMORY_VALUE,JsonValue);
    }
    ApiClearMemmory(){
        return axios.get(API_URL_CLEAR_MEMMORY);
    }
    ApiShowAllProject(){
        return axios.get(API_URL_SHOW_ALL_PROJECTS);
    }
    SaveCode(saveJson){
        return axios.post(API_URL_SAVE_PROJECT,saveJson);
    }
    GetCodeWithId(id){
        let addId = API_URL_GET_CODE_WITH_ID+id;
        return axios.get(addId);
    }


}export default new JavaApi();
