import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8003/api/v1",
    withCredentials: true
})

// axiosInstance.interceptors.request.use((config) => {
//     config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
//     return config
// })

export default axiosInstance;