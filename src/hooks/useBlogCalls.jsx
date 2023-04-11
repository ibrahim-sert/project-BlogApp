import { useDispatch } from "react-redux";
import {
  fetchFail,
  getComments,
  fetchStart,
  getBlogs,
  getDetail,
  getMyBlog,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { useNavigate } from "react-router";

const useBlogCalls = () => {
  const navigate = useNavigate();
  // const BASE_URL = "http://32151.fullstack.clarusway.com/api/";
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();

  //!----------------------------------getBlogsData-----------------
  const getBlogsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getBlogs({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!-------------------------------getCommet----------------------

  const getCommet = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);

      dispatch(getDetail({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!--------------------------------getlike----------------
  const getLike = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`);
      console.log(data);
      getBlogsData("blogs");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!------------------------getCatagories------------------------

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get(`api/${url}/`);

      getBlogsData("categories");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!---------PostBlog--------newBlog-----------
  const postBlog = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);

      getBlogsData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!------getMyBlogDAta-------------------
  const getMyBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/?author=${id}`);
      dispatch(getMyBlog({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!------------------PostComments----------
  const postComments = async (url, id, info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`, info);

      dispatch(getComments({ data }));
      getCommet("blogs", id);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!-----------------------Put-------------------

  const putData = async (url, info) => {
    dispatch(fetchStart);
    try {
      const { data } = await axiosWithToken.put(`api/${url}/${info.id}/`, info);
      getBlogsData("blogs");
      dispatch(getBlogs({ data }));
      navigate(-1);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!-----------------------delete-------------------

  const deleteData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`api/${url}/${id}/`);
      getBlogsData("blogs");
      navigate(-1);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return {
    getBlogsData,
    getCommet,
    getLike,
    postComments,
    getCategories,
    postBlog,
    getMyBlogData,
    deleteData,
    putData,
  };
};

export default useBlogCalls;
