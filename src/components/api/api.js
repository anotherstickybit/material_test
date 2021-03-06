import * as axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: `http://172.26.100.55:8001/`,

})

export const dataApi = {
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
        return instance.get(`/auth/users/me/`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(response => {
                return response.data;
            })
    },
    logout(accessToken) {
        return instance.post(`/token/logout/`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(response => {
                localStorage.removeItem('access-jwt');
                return response.data;
            })
    },
    async getByClient(client) {
        let response = await instance.get(`/byclient/${client}/`);
        return response.data;

    },
    async getByCustomer(customer) {
        let response = await instance.get(`/bycustomer/${customer}`);
        return response.data;

    }
}