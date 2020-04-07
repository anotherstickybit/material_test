import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://127.0.0.1:8000/`,

})

export const dataApi ={
    getAllQuestions() {
        return instance.get(`api/get/byserver/`).then(response => {
            return response.data;
        })
    },
    authorize(userName, password) {
        return instance.post(`auth/jwt/create/`, {
            'username': userName,
            'password': password
        }).then(response => {
            return response.data;
        })
    }
}