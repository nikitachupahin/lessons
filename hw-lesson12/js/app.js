'use strict';

/* eslint-disable no-undef */

const globalClock = new Clock('.globalClock');
const currentClock = new Clock('.currentClock');
const currentClockStartBtn = document.querySelector('.currentClockActions [data-action="start"]');
const currentClockStopBtn = document.querySelector('.currentClockActions [data-action="stop"]');

currentClockStartBtn.addEventListener('click', () => {
    currentClock.start();
});

currentClockStopBtn.addEventListener('click', () => {
    currentClock.stop();
});

console.log( globalClock, currentClock );

const parent = {
    name: 'parent',
    age: 40
};

const child = {
    name: 'child',
    '__proto__' : parent
};

console.log(child, parent);
console.log( child.age ); // 40

parent.age = 35;

console.log( child.age ); // 35

child.age = 28;

console.log( child.age ); // 28
console.log( parent.age ); // 35


const currentTimer = new Timer({
    selector: '.currentTimer'
});

console.log( currentTimer );
console.log( currentTimer.__proto__ === Timer.prototype );