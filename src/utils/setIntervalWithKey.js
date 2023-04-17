let intervalTracking = {};
export function setIntervalWithKey({ key, callback, time }) {
  if (intervalTracking[key] || !callback) return;

  // intervalTracking[key] = callback;

  intervalTracking[key] = setInterval(() => {
    callback();
  }, time);
}

export function isIntervalExcute({ key }) {
  return !!intervalTracking[key];
}

export function stopInterval({ key }) {
  intervalTracking[key] && clearInterval(intervalTracking[key]);
}
