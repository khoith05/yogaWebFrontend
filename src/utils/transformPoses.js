import { ANGLE_LABEL } from "./constant";

export default function transformPoses(poses) {
  return poses.map((pose, index) => {
    const angleList = Object.values(ANGLE_LABEL).reduce(
      (list, key) => ({
        ...list,
        [key]: pose[key],
      }),
      {}
    );

    const { videoUrl, duration, name, imageUrl } = pose;
    return {
      angleList,
      index,
      videoUrl,
      duration,
      name,
      imageUrl,
    };
  });
}
