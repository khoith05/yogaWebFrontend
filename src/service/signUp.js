import Api from "../utils/api";
import { SIGNUP_LOADING } from "../utils/constant";
import { get } from "lodash";

export default async function signUp({ username, email, password }) {
  const response = await Api.post({
    url: `/api/auth/signup`,
    key: SIGNUP_LOADING,
    data: {
      username,
      email,
      password,
    },
  });

  if (!response || response.status !== 200) {
    return { message: String(get(response, "data.data.message", "Error")) };
  }

  const token = get(response, "data.data.token", "");

  localStorage.setItem("token", token);

  return get(response, "data.data");
}
