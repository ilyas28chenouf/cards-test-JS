import React from 'react';
import { getTheme, setTheme } from '../../shared/theme.js';

export default function ThemeSelect() {
  const [theme, setThemeState] = React.useState(getTheme());

  const onChange = (v) => {
    setTheme(v);
    setThemeState(v);
  };

  return (
    <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      Тема:
      <select value={theme} onChange={(e) => onChange(e.target.value)}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </label>
  );
}
