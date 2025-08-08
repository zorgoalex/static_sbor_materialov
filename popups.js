window.Popups = (function() {
  function showInputPopup(title, value, type, onSave, max) {
    const popup = document.createElement('div');
    popup.className = "popup-modal";
    popup.innerHTML = `
      <div class="popup-content">
        <div style="margin-bottom:8px;">${title}</div>
        ${type === 'fact'
          ? `<input id="fact-input" type="number" min="1" ${max ? `max="${max-1}"` : ''} placeholder="Введите число" style="font-size:1.2em;padding:9px 8px; width:100%;" />`
          : `<textarea id="note-input" rows="3" style="font-size:1.08em;padding:9px 8px; width:100%;">${value||""}</textarea>`
        }
        <div style="display: flex; gap: 14px; justify-content: flex-end; margin-top:14px;">
          <button class="btn btn-secondary" id="close-btn">Отмена</button>
          <button class="btn" id="save-btn">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(popup);
    // Автофокус и пусто
    if (type === 'fact') {
      const input = popup.querySelector('#fact-input');
      input.value = '';
      input.focus();
      input.select();
    } else {
      popup.querySelector('#note-input').focus();
    }
    popup.querySelector('#close-btn').onclick = () => popup.remove();
    popup.querySelector('#save-btn').onclick = () => {
      const val = type === 'fact'
        ? Number(popup.querySelector('#fact-input').value)
        : popup.querySelector('#note-input').value;
      onSave(val);
      popup.remove();
    };
  }
  return { showInputPopup };
})();
