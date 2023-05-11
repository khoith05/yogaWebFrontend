import { throttle } from "lodash";
import Api from "../utils/api";
import { GET_RESULT_LOADING } from "../utils/constant";

export default async function getResult({ id }) {
  const response = await Api.get({
    url: `/api/result/${id}`,
    auth: true,
    key: GET_RESULT_LOADING,
    useCache: false,
  });

  if (!response || !response.name) {
    return null;
  }
  return response;
}
