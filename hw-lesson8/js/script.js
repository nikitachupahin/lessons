// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
    function taskHome3(n,k) {
        
    for( let i = 1; i <= n ;i++ ) {
        if (i % k === 0) {
            console.log(i);
        }
    }
    }
    taskHome3(10,2);
// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных. => in home

    function task1() {
        alert('Задача: Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.');
        const userData = prompt('Введите произвольное целое число большее 1 (мы вам покажем числа в диапазоне от 1 до числа, которое вы введете, включительно)');

        for(let a = 1; a <= userData; a++) {
            console.log(a);
        }
    }
    task1();
    function isSimple(x) {
        for (let i = 2; i < x; i += 1) {
            if (x % i === 0) {
                return false;
            }
        }
    
        return true;
    }
    function task2() {
        alert('Задача: Вывести в консоль простые числа от 1 до n.');

        const userData2 = prompt('Введите произвольное целое число больше 1 (мы вам покажем простие числа в диапазоне от 1 до числа, которое вы введете, включительно)');

        for( let g = 1; g <= userData2 ; g++) {
            if( isSimple(g) ) {
                console.log(g);
            }
        }
    }
    task2();
    function task3() {
        alert('Задача: Вывести в консоль числа кратные k, в диапазоне от 1 до n.');

        const userDataN = prompt('Введите произвольное целое число больше 1');

        const userDataK = prompt('Введите произвольное целое число, на которое будет делится числа в диапазоне от 1 до числа, которое вы ввели до этого');

    for( let i = 1; i <= userDataN ;i++ ) {
        if (i % userDataK === 0) {
            console.log(i);
        }
      }
    }
    task3();

