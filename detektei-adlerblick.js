import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `detektei-adlerblick`
 * website for adlerblick
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DetekteiAdlerblick extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'detektei-adlerblick',
      },
    };
  }
}

window.customElements.define('detektei-adlerblick', DetekteiAdlerblick);
