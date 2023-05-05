import Api from "../utils/api";
import { GET_EXERCISE_DETAIL_LOADING } from "../utils/constant";
import { get } from "lodash";
import transformPoses from "../utils/transformPoses";

export default async function getExerciseDetail(id) {
  const response = await Api.get({
    url: `/api/exercise/${id}`,
    auth: false,
    key: GET_EXERCISE_DETAIL_LOADING,
  });

  if (!response) return;

  const poses = get(response, "data.poses");

  const transformedPoses = transformPoses(poses);

  return { ...response.data, poses: transformedPoses };
}
