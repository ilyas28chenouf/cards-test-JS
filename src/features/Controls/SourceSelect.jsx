import React from 'react';

export default function SourceSelect({ value, onChange }) {
  return (
    <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      Источник:
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="quotes">Цитаты</option>
        <option value="todos">Задачи</option>
      </select>
    </label>
  );
}
