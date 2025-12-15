import './button.css';

// <button class="btn" type="button">Click to toggle popover</button>
export default class Button {
  constructor() {
    this.element = document.createElement('button');
    this.element.classList.add('btn');
    this.element.type = 'button';
    this.element.textContent = 'Click to toggle popover';
  }

  setEventClick(callback) {
    this.element.addEventListener('click', callback);
  }
}
