const axios = require('axios');
const http = {};
const config = require('../config/env')
axios.defaults.withCredentials=true;
// axios.interceptors.response.use(config => {
//     http.cookie  = config.headers['set-cookie'].join();
//     return config;
//   });
http.get = (url, option)=>{
    return new Promise((resolve, reject)=>{
        axios(config.path + url, {
            method: 'GET',
            params: option.params || '',
            headers: option.headers || {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json',
                AuthorizationCode: 'e90089ca-88fc-11ea-8f24-00163e06dd4a'
            }
        }).then((res)=>{
            resolve(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}
http.post = (url, option)=>{
    return new Promise((resolve, reject) => {
        axios(config.path + url, {
            method: 'POST',
            data: JSON.stringify(option.data) || '',
            headers:option.headers || {
                Accept: 'application/json; charset=utf-8',
                'Content-Type': 'application/json; charset=utf-8',
                'dataType': 'json',
                AuthorizationCode: 'e90089ca-88fc-11ea-8f24-00163e06dd4a'
            }
        }).then((res) => {
            resolve(res)
        }, err=>{
            reject(err)
        })
    })
}


module.exports = http;