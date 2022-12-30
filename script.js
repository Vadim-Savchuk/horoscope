"use strict";

let info   = document.querySelector('.info');
let text   = document.querySelector('.text');
let button = document.querySelector('.button');

let inputDay   = document.querySelector('.day');
let inputMonth = document.querySelector('#month');


const arrPredection = [
    'Інколи стосунки псуються. Візьміть паузу.',
    'Отримаєте вигідну пропозицію.',
    'Почніть вести щоденник. Записи думок вам допоможуть.',
    'Особисте життя потребує вашої уваги.',
    'Намагатеся не говорити зайвого.',
    'Розширяйте коло своїх знайомств.',
    'Прислухайтеся до поради, яку вам сьогодні дадуть.',
    'Саме час для нових починань. Вам все вдасться!',
    'Сьогодні укладете вигідну угоду.',
    'Вам доведеться поєднувати домашні справи та роботу. Ви впораєтесь!',
    'Ви маєте сильних конкурентів, але знаєте собі ціну.',
    'Якщо маєте бажання щось змінити у своєму житті, починайте вже зараз!',
    'Інколи вам важко зосередитися. Працюйте над собою.',
    'У вас романтичний період. Насолоджуйтеся!',
    'Змінювати свою точку зору - це нормально. Всі ми змінюємося.',
    'Сьогодні відчуватимете допомогу близьких, як ніколи.',
    'Не бійтеся ділитися з найближчими своїми секретами і планами.',
    'Усе, за що будете братися сьогодні, приречене на успіх.',
    'Чудовий день для найскладніших справ. Сьогодні вам все даватиметься легко.',
    'Інколи ви дуже невпевнені у собі. Час це виправляти.',
    'Настав час зайнятися улюбленою справою.',
    'Чудовий день для покупок.',
    'Зберіться із силами, дотримуйтеся свого плану та дійте!',
    'Ви почуваєтеся впевненим у собі. Так тримати!'
]

button.addEventListener('click', startPredection);

inputDay.addEventListener('keypress', function(event){
    if(event.code == 'Enter'){
        startPredection()
    }
});

function startPredection(){
    
    let values = inputMonth.value + '-' + inputDay.value;
    
    let date      = new Date(values);
    let dateHuman = addZero(date.getMonth() + 1) + '-' + addZero(date.getDate());
    
        if(dateHuman >= '01-20' && dateHuman <= '02-18'){
            text.textContent    = 'Водолій';
            prediction(arrPredection);
        }else if(dateHuman >= '02-19' && dateHuman <= '03-20'){
            text.textContent    = 'Риби';
            prediction(arrPredection);
        }else if(dateHuman >= '03-21' && dateHuman <= '04-19'){
            text.textContent    = 'Овен';
            prediction(arrPredection);
        }else if(dateHuman >= '04-20' && dateHuman <= '05-20'){
            text.textContent    = 'Телець';
            prediction(arrPredection);
        }else if(dateHuman >= '05-21' && dateHuman <= '06-20'){
            text.textContent    = 'Близнюки';
            prediction(arrPredection);
        }else if(dateHuman >= '06-21' && dateHuman <= '07-22'){
            text.textContent    = 'Рак';
            prediction(arrPredection);
        }else if(dateHuman >= '07-23' && dateHuman <= '08-22'){
            text.textContent    = 'Лев';
            prediction(arrPredection);
        }else if(dateHuman >= '08-23' && dateHuman <= '09-22'){
            text.textContent    = 'Діва';
            prediction(arrPredection);
        }else if(dateHuman >= '09-23' && dateHuman <= '10-22'){
            text.textContent    = 'Терези';
            prediction(arrPredection);
        }else if(dateHuman >= '10-23' && dateHuman <= '11-21'){
            text.textContent    = 'Скорпіон';
            prediction(arrPredection);
        }else if(dateHuman >= '11-22' && dateHuman <= '12-21'){
            text.textContent    = 'Стрілець';
            prediction(arrPredection);
        }else if(dateHuman >= '12-22' && dateHuman <= '01-19'){   
            text.textContent    = 'Козеріг';
            prediction(arrPredection);
        }else if(dateHuman >= '01-01' && dateHuman <= '01-19'){ // <- Виправив баг з 'Водолій'
            text.textContent    = 'Водолій';
            prediction(arrPredection);
        }
    
        inputMonth.value = '1';
        inputDay.value   = '';
}

function addZero(num) {
	if (num <= 9) {
		num = '0' + num;
	}
	
	return num;
}

function prediction(arr){
    for(let i = 0; i <= arr.length; i++){
        return info.textContent = arr[getRandomInt(0, arr.length -1)];
    }
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}