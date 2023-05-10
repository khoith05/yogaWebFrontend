const throttleTracking = {};
// [key]: Boolean

export default function throttleWithKey({ key, callback, time }) {
  return () => {
    if (!callback || throttleTracking[key]) return;

    callback();
    throttleTracking[key] = true;
    setTimeout(() => {
      throttleTracking[key] = undefined;
    }, time);
  };
}
