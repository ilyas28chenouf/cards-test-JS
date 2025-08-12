import { api } from '../api/client.js';
import { QuotesEntity } from '../entities/quotes.entity.js';

export async function fetchQuotes({ limit, skip }) {
  const raw = await api.get(`/quotes?limit=${limit}&skip=${skip}`);
  return QuotesEntity.normalize(raw);
}
