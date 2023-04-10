let timeoutTracking = {};
export function setTimeoutWithKey({ key, callback, time }) {
  if (timeoutTracking[key] || !callback) return;

  timeoutTracking[key] = callback;

  setTimeout(() => {
    const cb = timeoutTracking[key];

    if (cb) {
      cb();
      timeoutTracking[key] = undefined;
    }
  }, time);
}

export function isExcute({ key }) {
  return !!timeoutTracking[key];
}

export function stopExcute({ key }) {
  timeoutTracking[key] = undefined;
}
