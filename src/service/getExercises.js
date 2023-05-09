import Api from "../utils/api";
import { GET_EXERCISES_LOADING } from "../utils/constant";

export default async function getExercises() {
  const response = await Api.get({
    url: `/api/exercise/all`,
    auth: false,
    key: GET_EXERCISES_LOADING,
  });

  if (!response) return [];
  return response.data;
}
