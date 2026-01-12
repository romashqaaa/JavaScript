const name = prompt('Введите имя');
const surname = prompt('Введите фамилию');
const age = prompt('Введите возраст');
console.log(`Уровень 1: Привет, ${name} ${surname}, тебе ${age} лет.`);

const digit = prompt('Введите число');
if(isNaN(digit)){
    alert('Вы ввели не число!');
} else if(digit % 2 == 0){
    console.log('Уровень 2: Вы ввели четное число');
} else{
    console.log('Уровень 2: Вы ввели нечетное число');
}

const name1 = prompt('Введите имя');
const age1 = prompt('Введите возраст');
if(age1 < 18){
    console.log(`Уровень 3: Привет, ${name1}, ты еще школьник`);
} else if(age1 >= 18 && age1 <= 65){
    console.log(`Уровень 3: Привет, ${name1}, ты взрослый человек, заходи`);
} else if(age1 > 65){
    console.log(`Уровень 3: Привет, ${name1}, для возрастных лиц у нас скидки`);
} 
