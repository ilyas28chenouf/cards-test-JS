import React from 'react';

export default function Pagination({ page, onPrev, onNext, canPrev, canNext }) {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={!canPrev}>← Предыдущая</button>
      <span style={{ alignSelf: 'center' }}>Стр. {page}</span>
      <button onClick={onNext} disabled={!canNext}>Следующая →</button>
    </div>
  );
}
