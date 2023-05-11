import Api from "../utils/api";
import { SIGNUP_LOADING } from "../utils/constant";

export default async function signUp({ username, email, password }) {
  const { status, data } = await Api.post({
    url: `/api/auth/signup`,
    key: SIGNUP_LOADING,
    data: {
      username,
      email,
      password,
    },
  });

  if (status !== 200) {
    return { message: String(data.message) };
  }

  return data.data;
}
