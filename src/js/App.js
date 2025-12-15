import Button from '../components/button/Button';
import Popover from '../components/popover/Popover';

export default class App {
  constructor() {
    this.container = document.querySelector('.container');
    this.button = new Button();
    this.popover = new Popover();
  }

  init() {
    this.container.append(this.button.element);
    this.container.append(this.popover.element);
    this.button.setEventClick(this.onBtnClick.bind(this));
  }

  onBtnClick(event) {
    this.popover.changeVisibility();
    this.popover.setPosition(event.target);
  }
}
