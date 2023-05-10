const throttleTracking = {};
// [key]: Boolean

export default function throttleWithKey({ key, callback, time }) {
  return (param) => {
    if (!callback || throttleTracking[key]) return;

    callback(param);
    throttleTracking[key] = true;
    setTimeout(() => {
      throttleTracking[key] = undefined;
    }, time);
  };
}
