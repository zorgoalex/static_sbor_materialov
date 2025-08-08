// filters.js
window.Filters = (function() {
  function render(container, data, onFilter) {
    container.innerHTML = `
      <button class="filter-toggle" type="button">
        <span>Фильтры</span>
        <span style="font-size:1.4em;">▼</span>
      </button>
      <div class="filters-content">
        <div class="filter-block">
          <label>Поставщик:
            <select id="flt-supplier">
              <option value="">Все</option>
              ${data.suppliers.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </label>
        </div>
        <div class="filter-block">
          <label>Статус:
            <select id="flt-status">
              <option value="">Все</option>
              ${data.statuses.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </label>
        </div>
        <div class="filter-block">
          <label>Материал:
            <input id="flt-material" type="text" placeholder="Поиск..." />
          </label>
        </div>
      </div>
    `;
    // Мобильный аккордеон
    const filtersWrap = container;
    const toggle = filtersWrap.querySelector('.filter-toggle');
    toggle.onclick = () => {
      filtersWrap.classList.toggle('open');
      toggle.querySelector('span:last-child').textContent = filtersWrap.classList.contains('open') ? '▲' : '▼';
    };
    filtersWrap.querySelectorAll('select, input').forEach(el => {
      el.addEventListener('input', () => {
        onFilter({
          supplier: filtersWrap.querySelector('#flt-supplier').value,
          status: filtersWrap.querySelector('#flt-status').value,
          material: filtersWrap.querySelector('#flt-material').value.trim().toLowerCase()
        });
      });
    });
  }
  return { render };
})();
