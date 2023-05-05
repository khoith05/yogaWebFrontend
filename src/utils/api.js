import axios from "axios";
import LRU from "lru-cache";
import toggleLoading from "./toggleLoading";

const cache = new LRU({
  max: 50,
  maxAge: 24 * 60 * 60 * 1000, // 24h
});

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

function getHeaders(auth) {
  const token =
    auth && localStorage.getItem("access-token")
      ? `Bearer ${localStorage.getItem("access-token")}`
      : undefined;

  return {
    Authorization: token,
    "Content-Type": "application/json",
  };
}

async function get({ url, auth = true, useCache = true, key }) {
  const cacheKey = `get${url}`;
  if (useCache) {
    const cachedResponse = cache.get(cacheKey);

    if (cachedResponse) {
      return JSON.parse(cachedResponse);
    }
  }

  toggleLoading({ key, loading: true });

  const headers = getHeaders(auth);

  const response = await axiosInstance.get(url, headers);

  toggleLoading({ key, loading: false });

  if (response.status === 200 && useCache) {
    cache.set(cacheKey, JSON.stringify(response.data));
  }

  return response.data;
}

async function post({ url, auth = true, key, data }) {
  toggleLoading({ key, loading: true });
  const headers = getHeaders(auth);

  const response = await axiosInstance.post(url, data, headers);
  toggleLoading({ key, loading: true });

  return response.data;
}

const Api = { get, post };

export default Api;
