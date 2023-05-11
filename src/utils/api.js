import axios from "axios";
import LRU from "lru-cache";
import toggleLoading from "./toggleLoading";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_ENDPOINT_PRODUCTION
    : process.env.REACT_APP_API_ENDPOINT;

const cache = new LRU({
  max: 50,
  maxAge: 24 * 60 * 60 * 1000, // 24h
});

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

const getHeaders = (auth) => {
  return auth
    ? {
        "Access-Control-Allow-Origin": baseUrl,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    : {};
};

async function get({ url, useCache = true, key, auth = false, params = {} }) {
  const cacheKey = `get${url}`;
  if (useCache) {
    const cachedResponse = cache.get(cacheKey);

    if (cachedResponse) {
      return JSON.parse(cachedResponse);
    }
  }
  try {
    toggleLoading({ key, loading: true });

    const headers = getHeaders(auth);

    const response = await axiosInstance.get(url, {
      headers,
      params,
    });

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
    const headers = getHeaders(true);
    const response = await axiosInstance.post(url, data, { headers });
    toggleLoading({ key, loading: false });

    return response;
  } catch (err) {
    toggleLoading({ key, loading: false });
    return err.response;
  }
}

const Api = { get, post };

export default Api;
