


import axios from "axios";


import { LOCAL_STORAGE_KEY } from "../consts/storage";

axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem(LOCAL_STORAGE_KEY);

let api_url= process.env.REACT_APP_DEV_API_URL;

if (process.env.NODE_ENV === "production") {
  api_url = process.env.REACT_APP_PROD_API_URL;
}




const axiosConfig = {
  baseURL: api_url,
  headers: { "Access-Control-Allow-Origin": "*" },
  timeout: 10000,
};
const instance = axios.create(axiosConfig);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response && error.response.status === 401) {
      window.localStorage.removeItem(LOCAL_STORAGE_KEY);
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

// instance.CancelToken = axios.CancelToken;
// instance.isCancel = axios.isCancel;

const responseBody =  (response) => response.data;

export async function get(url, config = {}) {
  return await instance.get(url, { ...config }).then(responseBody);
}

async function post(url, data, config = {}) {
  return instance.post(url, { ...data }, { ...config }).then(responseBody);
}

async function put(url, data, config = {}) {
  return instance.put(url, { ...data }, { ...config }).then(responseBody);
}

async function del(url, config = {}) {
  return await instance.delete(url, { ...config }).then(responseBody);
}
// type api_r = {
//   get: (url: string, config?: object) => any;
//   post: (url: string, data: object, config?: object) => any;
//   put: (url: string, data: object, config?: object) => any;
//   del: (url: string, config?: object) => any;
// };

const api_request = { get, post, put, del };

export default api_request;
