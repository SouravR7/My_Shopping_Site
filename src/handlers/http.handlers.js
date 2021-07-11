import axios from "axios";
import AppConstants from "../constants";
const AxiosInstance = axios.create({
  baseURL: AppConstants.WorkerConstants.BASE_PATH,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.response.use(
  (response) => ({
    status: true,
    message: response.data.message,
    data: response.data.data,
  }),
  (error) => {
    return {
      status: false,
      message: error.response.data.errors,
    };
  }
);

export default AxiosInstance;