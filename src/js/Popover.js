export default class Popover {
  constructor() {
    this._popovers = [];
  }

  showPopover(message, title, element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover');
    
    // ID для идентификации
    const id = performance.now(); 
    this._popovers.push({
      id,
      element: popoverElement
    });
    
    popoverElement.setAttribute('id', id);

    popoverElement.innerHTML = `
      <h3 class="popover-header">${title}</h3>
      <div class="popover-body">${message}</div>
    `;

    document.body.appendChild(popoverElement);

    const { left, top, width } = element.getBoundingClientRect();

    popoverElement.style.left = left + width / 2 - popoverElement.offsetWidth / 2 + 'px';
    popoverElement.style.top = top - popoverElement.offsetHeight - 10 + 'px';
    
    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find(p => p.id === id);
    
    if (popover) {
      popover.element.remove();
      this._popovers = this._popovers.filter(p => p.id !== id);
    }
  }
}