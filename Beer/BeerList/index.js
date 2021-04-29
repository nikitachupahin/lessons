import BeerCard from '../BeerCard/index.js';

export default class BeerList {
    constructor(rootEl) {
        this.rootEl = rootEl;
        this.items = [];
    }

    createItem(data) {
        return new BeerCard(data, {
            rootClassName: 'beers__item'
        });
    }

    addItem(data) {
        this.items.push(this.createItem(data));
    }

    addItems(items) {
        this.items.push(...items.map(this.createItem, this));
    }

    add(items) {
        if (Array.isArray(items)) {
            this.addItems(items);
        } else {
            this.addItem(items);
        }

        this.render();
    }

    clear() {
        this.rootEl.innerText = '';
    }

    render() {
        this.rootEl.append( ...this.items.map(item => item.render()) );
    }
}