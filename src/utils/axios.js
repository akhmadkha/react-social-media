import axios from "axios"

const baseAPIURL = process.env.REACT_APP_API_URL

const axiosInstance = axios.create({
  baseURL: `${baseAPIURL}/`,
});

axiosInstance.interceptors.request.use({
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

axiosInstance.interceptors.response.use(
  function (success) {
    return success
  },
  async function (error) {
    if (error) {
      
    }
    return Promise.reject(error);
  }
)

export default axiosInstance