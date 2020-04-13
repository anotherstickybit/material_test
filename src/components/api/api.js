import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://127.0.0.1:8001/`,

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
            localStorage.setItem('access-jwt', response.data.access)
            return response.data;
        })
    },
    me(accessToken) {
        return instance.get(`/auth/users/me/`, { headers: { Authorization: `Bearer ${accessToken}`}})
            .then(response => {
                return response.data;
            })
    },
    logout(accessToken) {
        return instance.post(`/token/logout/`, { headers: { Authorization: `Bearer ${accessToken}`}})
            .then(response => {
                localStorage.removeItem('access-jwt');
                return response.data;
            })
    },
    getByClient(client) {
        return instance.get(`/byclient/${client}/`).then(response => {
            return response.data;
        })
    },
    getByCustomer(customer) {
        return instance.get(`/bycustomer/${customer}`).then(response => {
            return response.data;
        })
    }
}