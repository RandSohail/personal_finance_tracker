import axios from "axios";
import { message } from "../../components/AntDesign";
import { HTTP_EXCEPTIONS_MESSAGES, backendURL } from "../shared/constants";

async function axiosCall(url, method, data) {
  try {
    const response = await axios({
      method,
      url: backendURL + url,
      data,
      withCredentials: true,
    });
    const msg = response.data.message;
    if (msg && HTTP_EXCEPTIONS_MESSAGES[msg]) {
      message.success(HTTP_EXCEPTIONS_MESSAGES[msg]);
    }
    return response;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data && error.response.data.message
        ? HTTP_EXCEPTIONS_MESSAGES[error.response.data.message]
        : "An unexpected error occurred.";
    message.error(errorMessage);
    throw error; // re-throw for further handling
  }
}

export default axiosCall;
