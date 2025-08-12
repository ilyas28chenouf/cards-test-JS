import { useQuery } from '@tanstack/react-query';
import { fetchQuotes } from '../services/quotes.js';
import { fetchTodos } from '../services/todos.js';

export function usePaginatedQuery({ source, page, limit }) {
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ['list', source, page, limit],
    queryFn: async () => {
      if (source === 'quotes') return fetchQuotes({ limit, skip });
      if (source === 'todos') return fetchTodos({ limit, skip });
      throw new Error('Unknown source');
    },
    staleTime: 60_000,
    select: (data) => data
  });
}
