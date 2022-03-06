import axios from "axios"

export function request1(config) {
    const instance = new axios.create({
        // baseURL: 'http://123.207.32.32:8000',
        // baseURL: 'http://152.136.185.210:7878/api/m5',
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    });
    return instance(config)
}