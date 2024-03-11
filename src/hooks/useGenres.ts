import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface FetchingGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        setLoading(true);

        apiClient
        .get<FetchingGenresResponse>("/genres")
        .then(({data}) => {
            setGenres(data.results);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });

        return () => abortController.abort();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;