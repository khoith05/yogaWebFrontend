import { throttle } from "lodash";
import Api from "../utils/api";
import { GET_RESULTS_LOADING } from "../utils/constant";

async function getResults({ page = 1 }) {
  const response = await Api.get({
    url: `/api/result/all`,
    auth: true,
    params: {
      page,
      limit: 10,
    },
    key: GET_RESULTS_LOADING,
    useCache: false,
  });

  if (!response || !response.current) {
    return {
      current: [],
      numberOfPages: 0,
    };
  }
  return response;
}
export default throttle(getResults, 100);
