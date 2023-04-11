import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = "https://32271.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      // console.log(data);
      toastSuccessNotify("Login performed");
      navigate(-1);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed");
      console.log(error);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Register can not be performed");
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Logout can not be performed");
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
