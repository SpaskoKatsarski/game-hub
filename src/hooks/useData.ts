import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchingResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true);

        apiClient
        .get<FetchingResponse<T>>(endpoint)
        .then(({data}) => {
            setData(data.results);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });

        return () => abortController.abort();
    }, []);

    return { data, error, isLoading };
};

export default useData;