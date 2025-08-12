import React from 'react';
import SourceSelect from './features/Controls/SourceSelect.jsx';
import ThemeSelect from './features/Controls/ThemeSelect.jsx';
import CardList from './features/List/CardList.jsx';
import Pagination from './features/List/Pagination.jsx';
import { usePaginatedQuery } from './hooks/usePaginatedQuery.js';

const PAGE_LIMIT = 3; // константа на задание

export default function App() {
  const [source, setSource] = React.useState('quotes'); // 'quotes' | 'todos'
  const [page, setPage] = React.useState(1);

  const { data, isLoading, isError, refetch } = usePaginatedQuery({
    source,
    page,
    limit: PAGE_LIMIT
  });

  const total = data?.total ?? 0;
  const canPrev = page > 1;
  const canNext = page * PAGE_LIMIT < total;

  React.useEffect(() => {
    // при смене источника — сбрасываем на первую страницу
    setPage(1);
  }, [source]);

  return (
    <div className="app">
      <header className="toolbar">
        <SourceSelect value={source} onChange={setSource} />
        <ThemeSelect />
      </header>

      <main className="content">
        {isLoading && <div className="status">Загрузка...</div>}
        {isError && (
          <div className="status error">
            Ошибка загрузки. <button onClick={() => refetch()}>Повторить</button>
          </div>
        )}

        {!isLoading && !isError && (
          <>
            <div className="meta">Всего: {total}</div>
            <CardList source={source} items={data?.items ?? []} />
            <Pagination
              page={page}
              onPrev={() => canPrev && setPage(p => p - 1)}
              onNext={() => canNext && setPage(p => p + 1)}
              canPrev={canPrev}
              canNext={canNext}
            />
          </>
        )}
      </main>
    </div>
  );
}
