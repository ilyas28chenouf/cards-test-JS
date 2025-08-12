class QuoteCard extends HTMLElement {
  static get observedAttributes() { return ['data-author', 'data-quote']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  attributeChangedCallback() { this.render(); }

  get author() { return this.getAttribute('data-author') || ''; }
  get quote()  { return this.getAttribute('data-quote') || ''; }

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
        .quote { font-size: 15px; line-height: 1.45; margin: 0 0 10px; }
        .author { font-size: 13px; color: var(--muted); text-align: right; }
      </style>
      <div class="quote">“${this.escape(this.quote)}”</div>
      <div class="author">— ${this.escape(this.author)}</div>
    `;
  }

  escape(s) {
    return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  }
}
customElements.define('quote-card', QuoteCard);
