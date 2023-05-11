import Api from "../utils/api";
import { SIGNIN_LOADING } from "../utils/constant";
import { get } from "lodash";

export default async function signIn({ email, password }) {
  const response = await Api.post({
    url: `/api/auth/signin`,
    auth: false,
    key: SIGNIN_LOADING,
    data: {
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
