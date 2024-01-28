import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.response.use(function (response: AxiosResponse) {
    return response;
}, function (error) {
    const { response = {} } = error;
    const { status = {} } = response;
    if (status === 401) {
        localStorage.setItem("token", "");
        window.location.href = '/';
        return;
    }
    return Promise.reject(error);
});

const defaultConfig: AxiosRequestConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
};

const addHeaderAuthorization = (config: AxiosRequestConfig): AxiosRequestConfig => {
    let obj: AxiosRequestConfig = {
        headers: {
            ...config.headers,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    };
    return obj;
};

const AxiosHelper = {
    get: async (url: string, requireAuth: boolean = true): Promise<AxiosResponse> => {
        let config: AxiosRequestConfig = defaultConfig;
        if (requireAuth) {
            config = addHeaderAuthorization(config);
        }
        let res: AxiosResponse = await axios({
            method: "GET",
            url: url,
            headers: config.headers
        });
        return res;
    }
};

export default AxiosHelper;