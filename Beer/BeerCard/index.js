export default class BeerCard {
    constructor(data, renderOptions = {}) {
        this.data = data;
        this.renderOptions = renderOptions;

        this.createCard();
    }

    createCard() {
        const {
            rootTagName = 'li',
            titleTagName = 'div',
            rootClassName,
        } = this.renderOptions;
        const {
            image_url,
            name,
            description,
        } = this.data;
        const rootEl = document.createElement(rootTagName);
        const titleEl = document.createElement(titleTagName);
        const imgWrapper = document.createElement('div');
        const imgEl = document.createElement('img');
        const descriptionEl = document.createElement('div');

        imgEl.src = image_url;
        titleEl.innerText = name;
        descriptionEl.innerText = description;

        imgWrapper.append(imgEl);
        rootEl.append(imgWrapper, titleEl, descriptionEl);

        rootEl.className = 'beer';
        titleEl.className = 'beer__name';
        imgWrapper.className = 'beer__image-wrapper';
        imgEl.className = 'beer__image';
        descriptionEl.className = 'beer__description';

        if (rootClassName) {
            rootEl.classList.add(rootClassName);
        }

        this.rootEl = rootEl;
    }

    render() {
        return this.rootEl;
    }
}