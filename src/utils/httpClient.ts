import { Obj } from "../interface/common";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


const BASE_URL = 'https://swapi.dev/api/';
// export enum REQUEST_METHOD {
//     GET = "get",
//     POST = "post",
//     PUT = "put",
//     DELETE = "delete",
// }

// export const configAxios = (url: string) => {
//     return {
//         url,
//         method: REQUEST_METHOD.GET,
//         baseURL: BASE_URL,
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
// }

export const getData = async (query: string) => {
    return await axios.get(`${BASE_URL}/${query}`);
}
    

// export function getData1() {
//     // const config = configAxios(url);
//     axios.get('https://swapi.dev/api/people')
//         .then((response) => {return response.data})
// }

// // Add a request interceptor
// axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axiosClient.interceptors.response.use(function (response: AxiosResponse) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response.data;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

