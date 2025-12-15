/**
 * @jest-environment jsdom
 */
import App from '../src/js/App';

describe('check tooltip textContent on form submit', () => {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.append(container);

  new App().init();

  const btn = container.querySelector('.btn');
  const popover = container.querySelector('.popover');

  test('before first button click', async () => {
    expect(popover.classList.contains('hidden')).toBe(true);
  });

  test('after first button click', async () => {
    btn.click();
    expect(popover.classList.contains('hidden')).toBe(false);
  });

  test('after second button click', async () => {
    btn.click();
    expect(popover.classList.contains('hidden')).toBe(true);
  });

  test('after third button click', async () => {
    btn.click();
    expect(popover.classList.contains('hidden')).toBe(false);
  });
});
