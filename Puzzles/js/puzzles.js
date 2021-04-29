const EMPTY = 0;
const WIN_BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, EMPTY];
const WIN_STATUS = 'win';
const STARTED_STATUS = 'started';
const NOT_STARTED_STATUS = 'not started';
const DB_Press_TIME = 500;


function Puzzles(props = {}) {
    //* this = {}
    //* this.__proto__ = Puzzles.prototype;

    this.props = props;
    this.boardEl = document.querySelector(props.selector);

    this.clearBoard();

    this.status = NOT_STARTED_STATUS;

    
    document.addEventListener('keypress', (e) => {
        console.log('keypress', e, this);

        this.step(parseInt(e.key));
    });

    document.addEventListener('keypress', (a) => {
        let prevPressTime = 0;
        console.log(a.key);
        return () => {
            const currentPressTime = Date.now();

            if (currentPressTime - prevPressTime < DB_Press_TIME) {
                prevPressTime = 0;
                this.step(parseInt(a.key));
                console.log(a.key);
            }
        };
    });

    //* return this;
}

Puzzles.prototype.clearBoard = function () {
    this.boardEl.innerText = '';
};

Puzzles.prototype.createCells = function () {
    const cells = [];

    this.cells = {};

    for (let i=WIN_BOARD.length - 2; i >=0 ; i--) {
        const cellValue = WIN_BOARD[i];
        const cell = this.createCellItem(cellValue);

        cells.push(cell);
        this.cells[cellValue] = cell;
    }

    this.boardEl.append(...cells);
};

Puzzles.prototype.createCellItem = function (cellValue) {
    const item = document.createElement('div');

    item.className = 'board__item';
    item.innerText = cellValue;

    item.addEventListener('click', this.step.bind(this, cellValue));

    return item;
};

Puzzles.prototype.render = function () {
    for (let placeIdx = 0; placeIdx < this.board.length; placeIdx++) {
        const cellValue = this.board[placeIdx];

        if (cellValue === EMPTY) {
            continue;
        }

        const cellItem = this.cells[cellValue];
        const rowIndx = Math.floor(placeIdx / 4);
        const columnIdx = placeIdx % 4;

        cellItem.style.top = `${rowIndx * 25}%`;
        cellItem.style.left = `${columnIdx * 25}%`;
    }
};

Puzzles.prototype.start = function () {
    this.status = STARTED_STATUS;
    this.board = shuffleArr(WIN_BOARD);
    this.stepCount = 0;

    this.clearBoard();
    this.createCells();
    this.render();
};

Puzzles.prototype.step = function (cellValue) {
    console.log('step', cellValue);

    if (this.status !== STARTED_STATUS) {
        throw new Error('game not started');
    }

    const cellIdx = this.board.indexOf(cellValue);
    const emptyIndex = this.board.indexOf(EMPTY);
    const idxAvailableForMove = movedCellsIdx(this.board, emptyIndex);
    const canMove = idxAvailableForMove.TOP === cellIdx ||
        idxAvailableForMove.BOTTOM === cellIdx ||
        idxAvailableForMove.LEFT === cellIdx ||
        idxAvailableForMove.RIGHT === cellIdx;

    if (!canMove) {
        throw new Error(`can't move ${cellValue} from ${cellIdx} to ${emptyIndex}`);
    }

    this.board[cellIdx] = EMPTY;
    this.board[emptyIndex] = cellValue;

    this.render();

    if (this.isWin()) {
        this.status = WIN_STATUS;
    }
};

Puzzles.prototype.isWin = function () {
    for (let i=0; i < this.board.length; i++) {
        const winValue = WIN_BOARD[i];
        const currentValue = this.board[i];

        if (winValue !== currentValue) {
            return false;
        }
    }

    return true;

    // return this.board.join('') === WIN_BOARD.join('');
};

function movedCellsIdx(board, emptyIndex) {
    return {
        TOP: emptyIndex < 4 ? null : emptyIndex - 4,
        BOTTOM: emptyIndex >= 12 ? null : emptyIndex + 4,
        LEFT: emptyIndex % 4 === 0 ? null : emptyIndex - 1,
        RIGHT: emptyIndex % 4 === 3 ? null :emptyIndex + 1,
    };
}

function shuffleArr(arr) {
    const result = [...arr];

    for (let i=0; i<arr.length; i++) {
        const randomPlace = Math.floor(Math.random() * arr.length);
        const currentElement = result[i];

        result[i] = result[randomPlace];
        result[randomPlace] = currentElement;
    }

    return result;
}

// function shuffleArr(arr) {
//     return [...arr].sort(() => Math.random() - .5);
// }

const game = new Puzzles({
    selector: '.puzzles'
});

console.log(game);

game.start();
game.step(12); //* this = game