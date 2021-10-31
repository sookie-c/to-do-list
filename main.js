'use strict';

const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer__input');

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center' });

    input.value = '';
    input.focus();
}

let id = 0;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <input type="checkbox" class="item__checkbox" />
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fas fa-trash-alt" data-id="${id}"></i>
            </button>
        </div>
        <div class="item__divider"></div>`
    id++;

    return itemRow;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    onAdd();
});

items.addEventListener('click', (e) => {  
    const id = e.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});

