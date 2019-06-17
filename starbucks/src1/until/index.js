import axios from 'axios'
import router from '../router/index'
const request = axios.create();

request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.token
        }
    }
},(error)=>{
    return Promise.reject(error)
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    const status = error.response.status;
    if(status == '401'){
        router.push('/login')

    }else if(status == '404'){
        alert('页面找不到')
    }
    return Promise.reject(error)
})

export default {
    get(url,data){
        return request.get(url,{
            params:data
        })
    },
    post(url,data){
        return request.post(url,data)
    }
};