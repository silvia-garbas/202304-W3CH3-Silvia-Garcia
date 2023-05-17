import { Component } from './component';
import './header.css';

export class Header extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1>${this.title}</h1>
    </header>
    `;
  }
}
