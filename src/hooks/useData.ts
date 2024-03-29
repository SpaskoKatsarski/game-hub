import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchingResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true);

        apiClient
        .get<FetchingResponse<T>>(endpoint, { signal: abortController.signal, ...requestConfig})
        .then(({data}) => {
            setData(data.results);
            setLoading(false);
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => abortController.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
};

export default useData;