import Api from "../utils/api";

export default async function signOut() {
  const response = await Api.post({
    url: `/api/auth/signout`,
    auth: false,
    key: "SIGNOUT",
    data: {},
  });

  return response;
}
