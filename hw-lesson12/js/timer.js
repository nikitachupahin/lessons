(function(global, libName) {

    global[libName] = Timer;

    const TIMER_STOPED = 'TIMER_STOPED';
    const TIMER_PAUSED = 'TIMER_PAUSED';
    const TIMER_STARTED = 'TIMER_STARTED';

    function Timer(props = {}) {
        // this = {}
        // this.__proto__ = Timer.prototype

        this.props = props;

        this.state = {
            startedTime: 0,
            pausedTime: 0,
            status: TIMER_STOPED
        };

        this.rootEl = document.querySelector(props.selector);
        this.timeEl = this.rootEl.querySelector('.clock__time');

        this.actionCol = {
            start: this.rootEl.querySelector('[data-action="start"]'),
            stop: this.rootEl.querySelector('[data-action="stop"]'),
            pause: this.rootEl.querySelector('[data-action="pause"]'),
        };

        this.actionCol.start.addEventListener('click', this.start.bind(this));
        this.actionCol.stop.addEventListener('click', this.stop.bind(this));
        this.actionCol.pause.addEventListener('click', this.toggle.bind(this));

        // return this;
    }

    Timer.prototype.startRenderInterval = function startRenderInterval() {
        this._intervalID = setInterval(this.render.bind(this), 1000);
    };

    Timer.prototype.stopRenderInterval = function stopRenderInterval() {
        if (this._intervalID) {
            clearInterval(this._intervalID);
            this._intervalID = null;
        }
    };
    Timer.prototype.pauseRenderInterval = function pauseRenderInterval() {
        if (this._intervalID) {
            clearInterval(this._intervalID);
        }
    }
    Timer.prototype.runRenderInterval = function runRenderInterval() {
        this._intervalID = setInterval(this.render.bind(this), 1000);
    }

    Timer.prototype.start = function start() {
        console.log('started');
        this.state.status = TIMER_STARTED;
        this.state.startedTime = Date.now();

        this.startRenderInterval();
        this.render();
    };

    Timer.prototype.stop = function start() {
        console.log('stoped');
        this.state.status = TIMER_STOPED;

        this.stopRenderInterval();
        this.render();
    };

    Timer.prototype.pause = function start() {
        console.log('pause');
        this.state.status = TIMER_PAUSED;
        this.state.pausedTime = Date.now();

        this.pauseRenderInterval();
        this.render();
    };

    Timer.prototype.run = function start() {
        console.log('run');
        this.state.status = TIMER_STARTED;

        this.runRenderInterval();
        this.render();
    };

    Timer.prototype.toggle = function toggle() {
        if (this.state.status === TIMER_STARTED) {
            return this.pause();
        }

        if (this.state.status === TIMER_PAUSED) {
            return this.run();
        }
    };

    Timer.prototype.render = function render() {
        const currentTime = Date.now() - this.state.startedTime;
        const ss = Math.floor(currentTime / 1000);
        const displayedSS = getTimeDigits(ss % 60);
        const mm = Math.floor(ss / 60);
        const displayedMM = getTimeDigits(mm % 60);
        const hh = Math.floor(mm / 60);
        const displayedHH = getTimeDigits(hh);

        this.timeEl.innerText = `${displayedHH}:${displayedMM}:${displayedSS}`;
    };

    function getTimeDigits(d) {
        return d.toString().padStart(2, '0');
    }
})(window, 'Timer');