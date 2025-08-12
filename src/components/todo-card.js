class TodoCard extends HTMLElement {
  static get observedAttributes() {
    return ['data-title', 'data-completed', 'data-user-id'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  attributeChangedCallback() { this.render(); }

  get title()     { return this.getAttribute('data-title') || ''; }
  get completed() { return this.getAttribute('data-completed') === 'true'; }
  get userId()    { return this.getAttribute('data-user-id') || ''; }

  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--card-bg);
          color: var(--text);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 14px;
        }
        .title { font-size: 15px; margin: 0 0 10px; }
        .meta  { font-size: 12px; color: var(--muted); display: flex; gap: 8px; }
        .badge { padding: 2px 8px; border-radius: 999px; border: 1px solid var(--card-border); }
        .done { background: color-mix(in oklab, var(--accent), transparent 85%); }
      </style>
      <div class="title">${this.escape(this.title)}</div>
      <div class="meta">
        <span class="badge ${this.completed ? 'done' : ''}">
          ${this.completed ? 'Выполнено' : 'Открыто'}
        </span>
        <span class="badge">User #${this.escape(String(this.userId))}</span>
      </div>
    `;
  }

  escape(s) {
    return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  }
}
customElements.define('todo-card', TodoCard);
