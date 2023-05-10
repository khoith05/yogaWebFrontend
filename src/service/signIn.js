import Api from "../utils/api";
import { SIGNIN_LOADING } from "../utils/constant";

export default async function signIn({ email, password }) {
  const { status, data } = await Api.post({
    url: `/api/auth/signin`,
    auth: false,
    key: SIGNIN_LOADING,
    data: {
      email,
      password,
    },
  });

  if (status !== 200) {
    return { message: String(data.message) };
  }

  return data.data;
}
