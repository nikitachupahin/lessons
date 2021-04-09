(function(global, libName) {
    global[libName] = Clock;

    function Clock(selector) {
        // this = {}
        // this.__proto__ = Clock.prototype;

        this.selector = selector;

        this.rootEl = document.querySelector(selector);

        if (!this.rootEl.classList.contains('clock')) {
            this.timeEl = createTimeEl();
            this.greetingEl = createGreetingEl();

            this.rootEl.append(this.timeEl, this.greetingEl);
            this.rootEl.classList.add('clock');
        } else {
            this.timeEl = this.rootEl.querySelector('.clock__time');
            this.greetingEl = this.rootEl.querySelector('.clock__greeting');
        }


        // this.stop = stop;
        // this.start = start;

        // this.renderCurrentTime = renderCurrentTime;
        // this.render = render;

        this.render();
        this.start();

        // return this;
    }

    console.log( 'prototype', Clock.prototype );
    console.log( Clock.prototype.constructor === Clock ); // true

    Clock.prototype.age = 40;

    /**
     * @param {number} d
     * @returns {string} `0d` | `d`
     */
    function getTimeDigits(d) {
        return d.toString().padStart(2, '0');
    }

    function renderGreeting(displayTime) {
        const hh = getTimeDigits(displayTime.getHours());
        const mm = getTimeDigits(displayTime.getMinutes());
        const testingTime = `${hh}${mm}`; // 0000 - 1200 - 2359

        if (testingTime < '1200') {
            return Clock.DAY_GREETING;
        }

        return Clock.EVENING_GREETING;
    }

    function createTimeEl() {
        const el = document.createElement('div');

        el.className = 'clock__time';

        return el;
    }

    function createGreetingEl() {
        const el = document.createElement('div');

        el.className = 'clock__greeting';

        return el;
    }

    // static

    Clock.DAY_GREETING = 'Добрый день';
    Clock.EVENING_GREETING = 'Добрый вечер';

    // public
    Clock.prototype.stop = function stop() {
        // this = currentClock
        if (this._intervalID) {
            clearInterval(this._intervalID);
            this._intervalID = null;
        }
    };

    Clock.prototype.start = function start() {
        // public || private
        this._intervalID = setInterval(this.render.bind(this), 1000);
        this.render();
    };

    Clock.prototype.renderCurrentTime = function renderCurrentTime(displayTime) {
        // this = currentClock
        const hh = getTimeDigits(displayTime.getHours());
        const mm = getTimeDigits(displayTime.getMinutes());
        const ss = getTimeDigits(displayTime.getSeconds());

        return `${hh}:${mm}:${ss}`;
    };

    Clock.prototype.render = function render() {
        // this = currentClock
        const displayTime = new Date();
        const timeString = this.renderCurrentTime(displayTime); // this = this = currentClock

        this.timeEl.innerText = timeString;
        this.greetingEl.innerText = renderGreeting.call(this, displayTime);
    };

})(window, 'Clock');