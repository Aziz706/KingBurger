import axios from "axios";


export default function Axios(url , method , data) {
    return axios({
        baseURL:"https://fakebackburgers.onrender.com",
        url,
        method,
        data
    })
}