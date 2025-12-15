import Popover from './Popover';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Инициализируем наш класс
  const popoverFactory = new Popover();

  // Ищем кнопку в HTML (а не импортируем класс Button)
  const btn = document.querySelector('.btn');
  let actualPopoverId = null;

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      if (actualPopoverId !== null) {
        popoverFactory.removePopover(actualPopoverId);
        actualPopoverId = null;
      } else {
        const title = btn.getAttribute('title');
        const content = btn.getAttribute('data-content');
        actualPopoverId = popoverFactory.showPopover(content, title, btn);
      }
    });
  } else {
    console.log('Button not found');
  }
});