 // Переписать закоментированую функцию с помощью класа

// function List() {
//     this.rootEl = document.querySelector('.todo-list');
// }

// List.prototype.addItem = function (el) {
//     this.rootEl.append(el);
// };

// List.prototype.addItems = function (elCollection) {
//     this.rootEl.append(...elCollection);
// };

// List.prototype.clear = function () {
//     this.rootEl.innerText = '';
// };

class List {
    constructor() {
        this.rootEl = document.querySelector('.todo-list');
    }

    addItem(el) {
        this.rootEl.append(el);
    }

    addItems(elCollection) {
        this.rootEl.append(...elCollection);
    }

    clear() {
        this.rootEl.innerText = '';
    }
}