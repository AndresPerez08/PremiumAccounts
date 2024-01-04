
class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    this.shadowRoot.innerHTML = await this.getTemplate();
  }

  async getTemplate() {
    const htmlFile = await fetch('./components/custom-navbar.html');
    const template = await htmlFile.text();
    return template;
  }
}

customElements.define('custom-navbar', CustomNavbar);