import axios from "axios";

 const API_URL = "https://portions-guinea-slovenia-purse.trycloudflare.com/api/login/run";
 const API_URL_GET = "https://portions-guinea-slovenia-purse.trycloudflare.com/api/login/getAdd";
const API_URL_SET_MEMMORY_VALUE = "https://portions-guinea-slovenia-purse.trycloudflare.com/api/login/setMemmoryValue";
const API_URL_CLEAR_MEMMORY = "https://portions-guinea-slovenia-purse.trycloudflare.com/api/login/ClearAll"
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

}export default new JavaApi();