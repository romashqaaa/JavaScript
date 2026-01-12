const digit = prompt('Введите число');
if(isNaN(digit)){
    alert("Вы ввели не число!");
} else if(digit > 0){
    console.log('Уровень 1: Число положительное');
} else if(digit == 0){
    console.log('Уровень 1: Число равно нулю');
} else {
    console.log('Уровень 1: Число отрицательное');
}

const digit1 = prompt('Введите число');
if(isNaN(digit1)){
    alert("Вы ввели не число!");
} else if(digit1 > 100){
    console.log('Уровень 2: Число больше 100');
} else if(digit1 < 100){
    console.log('Уровень 2: Число меньше 100');
} else{
    console.log('Уровень 2: Число равно 100');
}

const a = prompt('Введите первое число');
const b = prompt("Введите второе число");
const c = prompt('Введите третье число');
if(a > b && a > c){
    console.log(`Уровень 3: ${a}`);
} else if (b > a && b > c){
    console.log(`Уровень 3: ${b}`);
} else{
    console.log(`Уровень 3: ${c}`);
}
