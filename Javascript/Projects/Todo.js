// Pure JavaScript TODO app (creates its own minimal UI; no HTML/CSS required).
// Features: add, edit, delete, toggle complete, persistent (localStorage), keyboard support.

(() => {
  const STORAGE_KEY = 'pure_js_todos_v1';

  // ---------- State ----------
  let todos = loadTodos();

  // ---------- Helpers ----------
  function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  function loadTodos() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
  }

  // ---------- Build UI ----------
  const app = document.createElement('div');
  app.style.maxWidth = '720px';
  app.style.margin = '18px auto';
  app.style.fontFamily = 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial';
  app.style.lineHeight = '1.4';

  const header = document.createElement('h2');
  header.textContent = 'Todo — JavaScript Only';
  header.style.margin = '6px 0 12px 0';

  const inputRow = document.createElement('div');
  inputRow.style.display = 'flex';
  inputRow.style.gap = '8px';
  inputRow.style.marginBottom = '12px';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Add new task and press Enter or click Add';
  input.style.flex = '1';
  input.autofocus = true;

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.style.flex = '0 0 90px';
  addBtn.style.cursor = 'pointer';

  const counts = document.createElement('div');
  counts.style.fontSize = '13px';
  counts.style.marginTop = '8px';

  const list = document.createElement('ul');
  list.style.listStyle = 'none';
  list.style.padding = '0';
  list.style.margin = '12px 0';
  list.style.display = 'grid';
  list.style.gap = '8px';

  app.appendChild(header);
  inputRow.appendChild(input);
  inputRow.appendChild(addBtn);
  app.appendChild(inputRow);
  app.appendChild(counts);
  app.appendChild(list);
  document.body.appendChild(app);

  // ---------- Rendering ----------
  function render() {
    // Clear
    list.innerHTML = '';

    // Create list items
    todos.forEach(todo => {
      const item = document.createElement('li');
      item.dataset.id = todo.id;
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.gap = '8px';
      item.style.padding = '10px';
      item.style.border = '1px solid rgba(0,0,0,0.08)';
      item.style.borderRadius = '8px';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!todo.done;
      checkbox.title = 'Mark complete';
      checkbox.style.width = '18px';
      checkbox.style.height = '18px';
      checkbox.addEventListener('change', () => {
        todo.done = checkbox.checked;
        saveTodos();
        render();
      });

      const contentWrap = document.createElement('div');
      contentWrap.style.flex = '1';
      contentWrap.style.display = 'flex';
      contentWrap.style.flexDirection = 'column';

      const textRow = document.createElement('div');
      textRow.style.display = 'flex';
      textRow.style.alignItems = 'center';
      textRow.style.gap = '8px';

      const text = document.createElement('span');
      text.textContent = todo.text;
      text.style.userSelect = 'none';
      text.style.whiteSpace = 'pre-wrap';
      if (todo.done) {
        text.style.textDecoration = 'line-through';
        text.style.opacity = '0.6';
      }

      const meta = document.createElement('small');
      meta.textContent = ` • ${new Date(todo.createdAt).toLocaleString()}`;
      meta.style.color = 'rgba(0,0,0,0.45)';
      meta.style.marginLeft = '6px';
      meta.style.fontSize = '12px';

      textRow.appendChild(text);
      textRow.appendChild(meta);

      contentWrap.appendChild(textRow);

      // Controls
      const controls = document.createElement('div');
      controls.style.display = 'flex';
      controls.style.gap = '6px';

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.title = 'Edit task';
      editBtn.style.cursor = 'pointer';
      editBtn.addEventListener('click', () => enterEditMode(item, todo));

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.title = 'Delete task';
      delBtn.style.cursor = 'pointer';
      delBtn.addEventListener('click', () => {
        if (confirm('Delete this task?')) {
          todos = todos.filter(t => t.id !== todo.id);
          saveTodos();
          render();
        }
      });

      controls.appendChild(editBtn);
      controls.appendChild(delBtn);

      item.appendChild(checkbox);
      item.appendChild(contentWrap);
      item.appendChild(controls);

      list.appendChild(item);
    });

    updateCounts();
  }

  function updateCounts() {
    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    counts.textContent = `${done} / ${total} completed`;
  }

  // ---------- Actions ----------
  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    todos.unshift({
      id: uid(),
      text: trimmed,
      createdAt: Date.now(),
      done: false
    });
    saveTodos();
    render();
  }

  function enterEditMode(itemEl, todo) {
    // Replace text with an input & show Save/Cancel
    const contentWrap = itemEl.querySelector('div');
    contentWrap.innerHTML = '';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = todo.text;
    editInput.style.width = '100%';
    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') finishEdit();
      if (e.key === 'Escape') cancelEdit();
    });

    const actionRow = document.createElement('div');
    actionRow.style.marginTop = '6px';
    actionRow.style.display = 'flex';
    actionRow.style.gap = '6px';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.style.cursor = 'pointer';
    saveBtn.addEventListener('click', finishEdit);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.cursor = 'pointer';
    cancelBtn.addEventListener('click', cancelEdit);

    actionRow.appendChild(saveBtn);
    actionRow.appendChild(cancelBtn);

    contentWrap.appendChild(editInput);
    contentWrap.appendChild(actionRow);
    editInput.focus();
    // caret to end
    editInput.setSelectionRange(editInput.value.length, editInput.value.length);

    function finishEdit() {
      const newText = editInput.value.trim();
      if (!newText) {
        alert('Task cannot be empty.');
        return;
      }
      todo.text = newText;
      todo.updatedAt = Date.now();
      saveTodos();
      render();
    }

    function cancelEdit() {
      render();
    }
  }

  // ---------- Events ----------
  addBtn.addEventListener('click', () => {
    addTodo(input.value);
    input.value = '';
    input.focus();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTodo(input.value);
      input.value = '';
    }
  });

  // Keyboard shortcuts:
  // Ctrl/Cmd+K focuses input; Ctrl/Cmd+L clears completed tasks
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
      e.preventDefault();
      if (confirm('Clear all completed tasks?')) {
        todos = todos.filter(t => !t.done);
        saveTodos();
        render();
      }
    }
  });

  // Simple drag to reorder (mouse only)
  let dragId = null;
  list.addEventListener('dragstart', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    dragId = li.dataset.id;
    e.dataTransfer?.setData('text/plain', dragId);
    e.dataTransfer?.setDragImage(li, 20, 20);
  });

  list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const over = e.target.closest('li');
    if (!over || !dragId) return;
    over.style.border = '2px dashed rgba(0,0,0,0.12)';
  });

  list.addEventListener('dragleave', (e) => {
    const over = e.target.closest('li');
    if (over) over.style.border = '1px solid rgba(0,0,0,0.08)';
  });

  list.addEventListener('drop', (e) => {
    e.preventDefault();
    const li = e.target.closest('li');
    if (!li || !dragId) return;
    const dropId = li.dataset.id;
    if (dragId === dropId) {
      dragId = null;
      render();
      return;
    }
    const dragIndex = todos.findIndex(t => t.id === dragId);
    const dropIndex = todos.findIndex(t => t.id === dropId);
    if (dragIndex < 0 || dropIndex < 0) {
      dragId = null;
      return;
    }
    const [moved] = todos.splice(dragIndex, 1);
    todos.splice(dropIndex, 0, moved);
    saveTodos();
    dragId = null;
    render();
  });

  // Make list items draggable
  function enableDragAttributes() {
    const items = list.querySelectorAll('li');
    items.forEach(i => {
      i.draggable = true;
      i.style.cursor = 'grab';
    });
  }

  // Re-render wrapper to call enabling drag attributes after render
  const originalRender = render;
  render = function () {
    originalRender();
    enableDragAttributes();
  };

  // ---------- Initial population & sample data ----------
  if (todos.length === 0) {
    // sample starter tasks (only when empty)
    todos = [
      { id: uid(), text: 'Welcome! This is a JavaScript-only todo app.', createdAt: Date.now(), done: false },
      { id: uid(), text: 'Try adding a task above and editing or deleting it.', createdAt: Date.now() - 60000, done: false },
    ];
    saveTodos();
  }

  // Final initial render
  render();
})();
