export function getNextVideo(max) {
  const key = "video-index";

  let index = Number(localStorage.getItem(key)) || 0;

  index = (index % max) + 1;

  localStorage.setItem(key, index);

  return index;
}
