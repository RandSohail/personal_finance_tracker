import axios from "axios";
// import { Navigate } from "react-router-dom";

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
      // TODO: handle the redirect properly, possibly elsewhere.
      // if (response.data.redirect) {
      //   message.success(HTTP_EXCEPTIONS_MESSAGES[msg.message]);
      //   return <Navigate to={response.data.redirect} />;
      // }

      return response;
    })
    .catch((error) => {
      console.log(22222, { error });
      if (error.response.data.message) {
        message.error(HTTP_EXCEPTIONS_MESSAGES[error.response.data.message]);
      } else throw error;
      // console.log(454545455);
    });
}

export default axiosCall;
