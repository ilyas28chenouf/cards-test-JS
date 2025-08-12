import React from 'react';

export default function CardList({ source, items }) {
  return (
    <div className="grid">
      {items.map((item) =>
        source === 'quotes' ? (
          <quote-card
            key={item.id}
            data-author={item.author}
            data-quote={item.quote}
          ></quote-card>
        ) : (
          <todo-card
            key={item.id}
            data-title={item.title}
            data-completed={String(item.completed)}
            data-user-id={String(item.userId)}
          ></todo-card>
        )
      )}
    </div>
  );
}
