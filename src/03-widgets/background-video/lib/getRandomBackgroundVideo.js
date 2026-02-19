/**
 * Возвращает случайный URL видео из объекта с видео.
 *
 * @param {Record<string, string>} videos - Объект, где ключи — произвольные идентификаторы,
 * а значения — URL/пути к видео (обычно результат `import.meta.glob(..., { import: "default" })`).
 * @returns {string|undefined} URL случайного видео или `undefined`, если список пуст.
 */
export const getRandomBackgroundVideo = (videos) => {
  const videoList = Object.values(videos);
  if (videoList.length === 0) return undefined;

  const index = Math.floor(Math.random() * videoList.length);
  return videoList[index];
};
