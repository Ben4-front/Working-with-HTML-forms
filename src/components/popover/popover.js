import './popover.css';

// <div class="popover hidden">
//   <h3 class="popover__title">Popover title</h3>
//   <p class="popover__text">And here's some amazing content. It's very engaging. Right?</p>
//   <div class="popover__arrow"></div>
// </div>
export default class Popover {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('popover', 'hidden');

    this.titleElement = document.createElement('h3');
    this.titleElement.classList.add('popover__title');
    this.titleElement.textContent = 'Popover title';

    this.textElement = document.createElement('p');
    this.textElement.classList.add('popover__text');
    this.textElement.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';

    this.arrowElement = document.createElement('div');
    this.arrowElement.classList.add('popover__arrow');

    this.element.append(this.titleElement, this.textElement, this.arrowElement);
  }

  changeVisibility() {
    this.element.classList.toggle('hidden');
  }

  setPosition(target) {
    const { top, left } = target.getBoundingClientRect();
    this.element.style.top = `${top - this.element.offsetHeight - 7}px`;
    this.element.style.left = `${left - (this.element.offsetWidth - target.offsetWidth) / 2}px`;
  }
}
