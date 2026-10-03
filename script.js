'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
let resolved = false;
document.getElementById('demo-toggle').addEventListener('click', function () {
  resolved = !resolved;
  document.getElementById('wa-resolution').hidden = !resolved;
  this.setAttribute('aria-expanded', String(resolved));
  this.textContent = resolved ? 'Скрыть ответ ОСИ' : 'Посмотреть ответ ОСИ';
});
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const endpoint = window.SITE_CONFIG?.formEndpoint?.trim() || '';
const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
if (!configured) status.textContent = 'Прием сообщений пока не открыт. Пожалуйста, вернитесь позже.';
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!configured) { status.textContent = 'Прием сообщений пока не открыт. Ваше сообщение не отправлено.'; return; }
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  status.textContent = 'Отправляем сообщение…';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: controller.signal });
    if (!response.ok) throw new Error('Submission failed');
    form.reset();
    status.textContent = 'Спасибо! Сообщение отправлено. Мы ответим на указанный email.';
  } catch (error) {
    status.textContent = error.name === 'AbortError' ? 'Не удалось подтвердить отправку. Проверьте соединение перед повторной попыткой.' : 'Не удалось отправить сообщение. Текст сохранен в форме. Попробуйте еще раз.';
  } finally { clearTimeout(timer); button.disabled = false; }
});
