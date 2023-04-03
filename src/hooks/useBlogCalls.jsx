import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getBlogs } from "../features/blogSlice";
import axios from "axios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const BASE_URL = "https://32271.fullstack.clarusway.com/api/";

  const getBlogsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${url}/`);
      dispatch(getBlogs({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getBlogsData };
};

export default useBlogCalls;
