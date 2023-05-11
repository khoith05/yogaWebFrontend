import Api from "../utils/api";
import { GET_RESULT_LOADING } from "../utils/constant";

export default async function getResults({ page = 1 }) {
  const response = await Api.get({
    url: `/api/result/all`,
    auth: true,
    params: {
      page,
      limit: 10,
    },
    key: GET_RESULT_LOADING,
  });

  if (!response) return [];
  return response;
}
