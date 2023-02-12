import axios from "axios";

const API_URL = "http://localhost:8080/api/run";
const API_URL_GET = "http://localhost:8080/api/getAdd";
const API_URL_SET_MEMMORY_VALUE = "http://localhost:8080/api/setMemmoryValue";
const API_URL_CLEAR_MEMMORY = "http://localhost:8080/api/ClearAll";
const API_URL_SHOW_ALL_PROJECTS = "http://localhost:8080/api/GetAllProject";
const API_URL_SAVE_PROJECT = "http://localhost:8080/api/SaveCode";
const API_URL_GET_CODE_WITH_ID = "http://127.0.0.1:8080/api/getcodewithid/";

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
