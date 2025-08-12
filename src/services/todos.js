import { api } from '../api/client.js';
import { TodosEntity } from '../entities/todos.entity.js';

export async function fetchTodos({ limit, skip }) {
  const raw = await api.get(`/todos?limit=${limit}&skip=${skip}`);
  return TodosEntity.normalize(raw);
}
