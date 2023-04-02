import axios from "axios";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = "https://32271.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed");
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    try {
      const { data } = axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Register can not be performed");
    }
  };

  return { login, register };
};

export default useAuthCalls;
