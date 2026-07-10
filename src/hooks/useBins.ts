import bins from '../data/bins.json';

export function useBins() {
  // Мы импортируем данные напрямую.
  // В будущем здесь может быть `fetch` для загрузки с сервера.
  return bins;
}

