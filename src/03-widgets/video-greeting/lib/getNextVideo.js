import { randNumber } from "./randNumber";

export function getNextVideo(max) {
  const key = "video-index";

  let index = Number(localStorage.getItem(key)) || randNumber(max);

  index = (index % max) + 1;

  localStorage.setItem(key, index);

  return index;
}
