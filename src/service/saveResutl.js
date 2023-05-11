import Api from "../utils/api";

export default async function saveResult({ exerciseId, point, time, poses }) {
  const { status, data } = await Api.post({
    url: `/api/result/add`,
    key: "SAVE_RESULT",
    data: {
      exerciseId,
      point,
      time,
      poses,
    },
  });

  if (status !== 200) {
    return { message: String(data.message) };
  }

  return data.data;
}
