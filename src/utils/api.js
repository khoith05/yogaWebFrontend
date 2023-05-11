import axios from "axios";
import LRU from "lru-cache";
import toggleLoading from "./toggleLoading";

const cache = new LRU({
  max: 50,
  maxAge: 24 * 60 * 60 * 1000, // 24h
});

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

const headers = (auth) => {
  return auth
    ? {
        "Access-Control-Allow-Origin": process.env.REACT_APP_API_ENDPOINT,
        "Access-Control-Allow-Credentials": "true",
        withCredentials: true,
      }
    : {};
};

async function get({ url, useCache = true, key, auth = false }) {
  const cacheKey = `get${url}`;
  if (useCache) {
    const cachedResponse = cache.get(cacheKey);

    if (cachedResponse) {
      return JSON.parse(cachedResponse);
    }
  }
  try {
    toggleLoading({ key, loading: true });

    const response = await axiosInstance.get(url, headers(auth));

    toggleLoading({ key, loading: false });
    if (response.status === 200 && useCache) {
      cache.set(cacheKey, JSON.stringify(response.data));
    }

    return response.data;
  } catch (err) {
    toggleLoading({ key, loading: false });
    return err.response;
  }
}

async function post({ url, key, data }) {
  try {
    toggleLoading({ key, loading: true });
    const response = await axiosInstance.post(url, data, headers(true));
    toggleLoading({ key, loading: false });

    return response;
  } catch (err) {
    toggleLoading({ key, loading: false });
    return err.response;
  }
}

const Api = { get, post };

export default Api;
