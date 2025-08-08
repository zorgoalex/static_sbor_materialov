document.addEventListener('DOMContentLoaded', function() {
  // --- Рендер header ---
  document.getElementById('header').innerHTML = `
    <div style="display:flex;align-items:center;">
      <div class="burger-menu" id="burger-menu">
        <span></span><span></span><span></span>
      </div>
      <span class="header-title">Сбор материалов</span>
    </div>
  `;
  document.getElementById('burger-menu').onclick = () => {
    alert('Тут может быть навигация');
  };

  // --- Начальный экран: только кнопка ---
  showOpenReqsButton();

  function showOpenReqsButton() {
    document.querySelector('main').innerHTML = '';
    const requisitionInfo = document.getElementById('requisition-info');
    if (requisitionInfo) requisitionInfo.innerHTML = '';
    
    document.getElementById('action-bar').innerHTML = `
      <button class="btn" id="btn-open-reqs" style="width:220px;margin:0 auto;display:block;">Открыть список заявок</button>
    `;
    document.getElementById('btn-open-reqs').onclick = function() {
      displayRequisitionsScreen();
    };
  }

  function displayRequisitionsScreen() {
    const allManagers = [...new Set(window.demoRequisitions.map(r => r.manager))];
    const allStatuses = window.statuses;
    const allPriorities = window.priorities; // Данные для нового фильтра

    document.querySelector('main').innerHTML = `
      <section id="requisitions-filters"></section>
      <section id="requisitions-list-container"></section>
    `;
    document.getElementById('action-bar').innerHTML = '';

    const filtersContainer = document.getElementById('requisitions-filters');
    filtersContainer.innerHTML = `
        <div class="filters-panel">
            <h3 style="margin:0 0 18px 0; font-size:1.16em;">Заявки на сбор</h3>
            <div class="req-filters-grid">
                <div>
                    <label for="flt-date">Дата</label>
                    <input type="date" id="flt-date" class="filter-input">
                </div>
                <div>
                    <label for="flt-manager">Менеджер</label>
                    <select id="flt-manager" class="filter-input">
                        <option value="">Все</option>
                        ${allManagers.map(m => `<option value="${m}">${m}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="flt-status">Статус</label>
                    <select id="flt-status" class="filter-input">
                        <option value="">Все</option>
                        ${allStatuses.map(s => `<option value="${s}">${s}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="flt-priority">Приоритет</label>
                    <select id="flt-priority" class="filter-input">
                        <option value="">Все</option>
                        ${allPriorities.map(p => `<option value="${p}">${p}</option>`).join('')}
                    </select>
                </div>
            </div>
        </div>
    `;

    const applyFilters = () => {
        const date = document.getElementById('flt-date').value;
        const manager = document.getElementById('flt-manager').value;
        const status = document.getElementById('flt-status').value;
        const priority = document.getElementById('flt-priority').value; // Значение нового фильтра

        const filteredData = window.demoRequisitions.filter(req => {
            const dateMatch = !date || req.creation_date === date;
            const managerMatch = !manager || req.manager === manager;
            const statusMatch = !status || req.status === status;
            const priorityMatch = !priority || req.priority === priority; // Условие для нового фильтра
            return dateMatch && managerMatch && statusMatch && priorityMatch;
        });
        
        renderRequisitionsList(filteredData);
    };

    filtersContainer.querySelectorAll('.filter-input').forEach(el => {
        el.addEventListener('input', applyFilters);
    });

    renderRequisitionsList(window.demoRequisitions);
  }

  window.renderRequisitionsList = function(requisitions) {
    const container = document.getElementById('requisitions-list-container');
    
    // Добавлены заголовки с классами для иконок и колонка Приоритет
    container.innerHTML = `
      <table class="req-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th class="th-manager"><span>Менеджер</span></th>
            <th class="th-priority"><span>Приоритет</span></th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          ${requisitions.map(req => `
            <tr class="req-row" data-id="${req.requisition_id}">
              <td>${req.requisition_id}</td>
              <td>${new Date(req.creation_date).toLocaleDateString('ru-RU')}</td>
              <td>${req.manager}</td>
              <td>${req.priority || '—'}</td>
              <td>
                <span class="status-badge status-${getStatusClass(req.status)}">${req.status}</span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    container.querySelectorAll('.req-row').forEach(row => {
      row.onclick = function() {
        const reqId = +row.dataset.id;
        openRequisition(reqId);
      };
    });
  }

  window.openRequisition = function(reqId) {
    const req = window.demoRequisitions.find(r => r.requisition_id === reqId);
    if (req) rerenderRequisitionPage(req);
  }

    function rerenderRequisitionPage(data) {
      const main = document.querySelector('main');
      main.innerHTML = `
        <section id="requisition-info"></section>
        <section id="table"></section>
      `;
  
      let items = data.items.map(i => Object.assign({}, i));
  
      const actionBar = document.getElementById('action-bar');
      actionBar.innerHTML = `
        <button class="btn" id="btn-back-to-list" style="width:100%; max-width: 320px; margin: 0 auto; display: block;">Список заявок на сбор</button>
      `;
  
      document.getElementById('btn-back-to-list').onclick = function() {
        displayRequisitionsScreen();
      };
  
      document.getElementById('requisition-info').innerHTML = `
        <div><b>Заявка №${data.requisition_id}</b></div>
        <div>Менеджер: <b>${data.manager}</b></div>
        <div>Дата: <b>${data.creation_date}</b> → <b>${data.required_date}</b></div>
      `;
      
      function rerender() {
        MaterialsTable.render(document.getElementById('table'), items, window.statuses, handleUpdate);
      }
      rerender();
  
      function fakeSave(item_id, updatedFields) {
        MaterialsTable.showSaving(item_id, true);
        setTimeout(() => {
          Object.assign(items.find(it => it.item_id === item_id), updatedFields);
          MaterialsTable.showSaving(item_id, false);
          rerender();
        }, 950);
      }
  
      function handleUpdate(item_id, field, value) {
        const item = items.find(it => it.item_id === item_id);
        if (!item) return;
        if (field === 'status') {
          if (value === 'Частично') {
            window.Popups.showInputPopup('Факт. количество', '', 'fact', (val) => {
              if (!val || isNaN(val) || val <= 0 || val >= item.quantity) {
                alert('Введите число больше 0 и меньше ' + item.quantity);
                return;
              }
              fakeSave(item_id, { status: value, fact: val });
            }, item.quantity);
          } else if (value === 'Собрано полностью') {
            fakeSave(item_id, { status: value, fact: item.quantity });
          } else {
            fakeSave(item_id, { status: value, fact: 0 });
          }
          return;
        }
        if (field === 'fact') {
          window.Popups.showInputPopup('Факт. количество', '', 'fact', (val) => {
            if (!val || isNaN(val) || val < 0 || val > item.quantity) {
              alert('Введите корректное число');
              return;
            }
            let newStatus = val >= item.quantity ? 'Собрано полностью' : (val > 0 ? 'Частично' : 'Не собрано');
            fakeSave(item_id, { fact: val, status: newStatus });
          }, item.quantity);
        }
        if (field === 'note') {
          window.Popups.showInputPopup('Примечание', item.note, 'note', (val) => {
            fakeSave(item_id, { note: val });
          });
        }
      }
    } 

  function getStatusClass(status) {
    if (status === "Собрано полностью") return "ok";
    if (status === "Частично") return "part";
    return "none";
  }

  showOpenReqsButton();
});