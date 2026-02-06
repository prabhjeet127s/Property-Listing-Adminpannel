import axios from "axios";

const axiosInstance = axios.create({

    baseURL: import.meta.env.VITE_BASE_API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },

});

axiosInstance.interceptors.request.use(
    (config) => {
    

        const accessToken = sessionStorage.getItem("token")
        if (accessToken) {
    

            config.headers["Authorization"] = `${accessToken}`;

        }
        return config;
    }
)

axiosInstance.interceptors.response.use(
    (Response) => {
        return Response
    },

    (error) => {
        alert("error")
        if (error.response && error.response.status === 400) {
            sessionStorage.removeItem("token")
            localStorage.removeItem("token")

            window.location.href = '/auth/signin'


        }
        return Promise.reject(error)

    }

);


export default axiosInstance;


