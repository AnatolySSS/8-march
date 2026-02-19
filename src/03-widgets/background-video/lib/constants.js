// Константа содержащая все файлы видео-фонов в папке `assets`.
// Используем Vite `import.meta.glob` для динамического импорта всех
// файлов, соответствующих шаблону `background_*.mp4`.
//
// Опции:
// - `eager: true` — импортировать модули немедленно (не лениво),
//   чтобы получить доступ к URL файлов на этапе выполнения без
//   отдельного асинхронного вызова.
// - `import: "default"` — взять значение экспорта `default` из
//   каждого модуля (в Vite импорт mp4 возвращает путь по-умолчанию).
export const BACKGROUND_VIDEOS = import.meta.glob("../assets/background_*.mp4", {
  eager: true,
  import: "default",
});

// Пример использования (получение массива URL):
// Object.values(BACKGROUND_VIDEOS)
