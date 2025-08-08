// table.js

window.MaterialsTable = (function() {
  function render(container, items, statuses, onUpdate) {
    container.innerHTML = items.map(row => {
      // Цвет карточки для "Собрано полностью"
      let cardStyle = "";
      if (row.status === "Собрано полностью") cardStyle = "background:#f7ecd7;border-color:#c9a46d;";

      // Количество: только если статус не "Собрано полностью" показываем факт/остаток
      let qtyHtml = `<div class="mat-qty">${row.quantity} ${row.unit}`;
      if (row.status !== "Собрано полностью") {
        if (row.fact && row.fact < row.quantity) {
          const left = row.quantity - row.fact;
          qtyHtml += ` <span class="fact-badge">(${row.fact})</span> = <span class="remain-badge">${left}</span>`;
        }
      }
      qtyHtml += "</div>";

      // Кнопка Примечание: мягкий фон при наличии текста
      const noteBtnClass = row.note && row.note.trim() ? "btn-action note-present" : "btn-action";

      // --- ИЗМЕНЕНО: Аккордеон с клиентами ---
      let accordion = "";
      if (row.clients && row.clients.length) {
        accordion = `
          <div class="accordion" data-item="${row.item_id}">
            <div class="accordion-header">
              <span>Клиенты (${row.clients.length})</span>
              <span class="accordion-toggle">▼</span>
            </div>
            <div class="accordion-content">
              <table class="clients-table">
                <thead><tr>
                  <th>Клиент</th>
                  <th>Заказ</th>
                  <th>Телефон</th>
                  <th>Кол-во</th>
                </tr></thead>
                <tbody>
                  ${row.clients.map(c => `<tr>
                    <td>${c.name}</td>
                    <td>
                        <span class="clickable-field" data-type="Заказ" data-value="${c.order}">${c.order}</span>
                    </td>
                    <td>
                        <span class="clickable-field" data-type="Телефон" data-value="${c.phone}">${c.phone}</span>
                    </td>
                    <td>${c.qty}</td>
                  </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      // Верстка карточки — порядок: материал, количество, поставщик, статус, кнопки, аккордеон
      return `
      <div class="material-card" data-item="${row.item_id}" style="${cardStyle}">
        <div class="mat-name">${row.material}</div>
        ${qtyHtml}
        <div class="mat-supplier">${row.supplier}</div>
        <div class="saving-spinner" style="display:none"></div>
        <div class="status-wrap">
          <select class="status-select" data-item="${row.item_id}">
            ${statuses.map(s => `<option${row.status===s?' selected':''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="material-actions">
          <button class="btn-action" data-type="fact" data-item="${row.item_id}">Факт</button>
          <button class="${noteBtnClass}" data-type="note" data-item="${row.item_id}">Примечание</button>
        </div>
        ${accordion}
      </div>
      `;
    }).join('');

    // --- ОБЩИЕ СОБЫТИЯ ---
    // Изменение статуса
    container.querySelectorAll('.status-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const id = +sel.dataset.item;
        onUpdate(id, 'status', sel.value);
      });
    });
    // Кнопки Факт и Примечание
    container.querySelectorAll('.btn-action').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = +btn.dataset.item, type = btn.dataset.type;
        onUpdate(id, type, null);
      });
    });

    // --- НОВОЕ: События для аккордеона и кликабельных полей ---
    setTimeout(() => {
      // Открытие/закрытие аккордеона
      document.querySelectorAll('.accordion-header').forEach(header => {
        header.onclick = function() {
          const parent = header.parentElement;
          parent.classList.toggle('open');
        };
      });

      // Клик по полям "Заказ" и "Телефон"
      document.querySelectorAll('.clickable-field').forEach(field => {
        field.onclick = function(e) {
            const type = e.target.dataset.type;
            const value = e.target.dataset.value;
            alert(`${type}: ${value}`);
        }
      });
    }, 0);
  }

  function showSaving(itemId, show) {
    const card = document.querySelector(`.material-card[data-item="${itemId}"]`);
    if (!card) return;
    const spinner = card.querySelector('.saving-spinner');
    if (!spinner) return;
    spinner.style.display = show ? 'flex' : 'none';
    if (show) {
      spinner.innerHTML = `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="18" fill="none" stroke-width="6" stroke="#296fff" stroke-linecap="round"></circle></svg>`;
    } else {
      spinner.innerHTML = '';
    }
  }

  return { render, showSaving };
})();