import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
    next: string | null;
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "343281902be546bea7248db8f2a3f59e"
    }
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }

    post = (data: T) => {
        return axiosInstance
            .post<T>(this.endpoint, data)
            .then(res => res.data);
    }

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(this.endpoint + `/${id}`)
            .then(res => res.data)
    };
}

export default APIClient;