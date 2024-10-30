import axios from "axios";
import { message } from "../../components/AntDesign";
import { HTTP_EXCEPTIONS_MESSAGES, backendURL } from "../shared/constants";

async function axiosCall(url, method, data) {
  return axios({
    method,
    url: backendURL + url,
    data,
    withCredentials: true,
  })
    .then((response) => {
      const msg = response.data.message;
      if (msg) {
        message.success(HTTP_EXCEPTIONS_MESSAGES[msg]);
      }

      return response;
    })
    .catch((error) => {
      if (error.response.data.message) {
        message.error(HTTP_EXCEPTIONS_MESSAGES[error.response.data.message]);
      } else throw error;
    });
}

export default axiosCall;
