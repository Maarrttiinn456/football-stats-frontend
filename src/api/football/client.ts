import axios, { type AxiosRequestConfig } from 'axios';

const footballClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    method: 'GET',
});

footballClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API error', error);
        return Promise.reject(error);
    }
);

export const FootballClient = async <T>(
    config: AxiosRequestConfig
): Promise<T> => {
    const response = await footballClient<T>(config);
    return response.data;
};
