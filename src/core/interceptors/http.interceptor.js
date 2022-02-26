import axios from 'axios';

axios.interceptors.request.use(
    function (config) {
        config.headers = {
            ...config.headers,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };

        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401 && window.location.pathname !== '/login') {
            // window.location.replace(window.location.origin + `/login?redirect_uri=${window.location.href}`);
            window.location.replace(
                `${import.meta.env.VITE_API_BASE_URL}/login?redirect_uri=${encodeURIComponent(window.location.origin)}`,
            );
        }
        return Promise.reject(error);
    },
);
