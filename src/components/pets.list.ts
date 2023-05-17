import { getMockPets } from '../data/mock.pet';
import { Pet } from '../models/pet';
import { Component } from './component';

import './pets.list.css';

export class PetsList extends Component {
  pets!: Pet[];
  constructor(public selector: string) {
    super(selector);
    this.pets = getMockPets();
    this.pets[1].isAdopted = true;
    this.render();
    console.log(this.element);
    console.log(this.pets);
  }

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  handleDelete(event: Event) {
    const element = event.target as HTMLSpanElement;
    this.pets = this.pets.filter((item) => item.id !== element.dataset.id);
    console.log(this.pets);
    this.render();
  }

  createTemplate() {
    const list = this.pets
      .map(
        (item) => `
          <li>
           <img src="/images/${item.name}.jpg" alt="Pet" />
            <label for="adopt">Adoptado</label>
            <input id="adopt" type="checkbox" ${
              item.isAdopted ? 'checked' : ''
            }>
            <div>
            <span>ID: ${item.id}<span>
            <span>Nombre:: ${item.name}</span>
            <span>Raza: ${item.breed}</span>
            <span>Dueño: ${item.owner}</span>
            <i class="button" role="button" data-id=${item.id}>X</i>
          </li>`
      )
      .join('');

    return `<ul class="ul">${list}</ul>`;
  }
}
