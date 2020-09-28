// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
//     a. Имя содержит только буквы.
//     b. Телефон имеет вид +7(000)000-0000.
//     c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
//     d. Текст произвольный.
//     e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.

let text = `One: 'Hi Mary.' Two: 'Oh, hi.' <br>
            One: 'How are you doing?' <br>
            Two: 'I'm doing alright. How about you?' <br>
                One: 'Not too bad. The weather is great isn't it?' <br>
                Two: 'Yes. It's absolutely beautiful today.' <br>
            One: 'I wish it was like this more frequently.' <br>
            Two: 'Me too.' <br>
            One: 'So where are you going now?' <br>
            Two: 'I'm going to meet a friend of mine at the department store.' <br>
            One: 'Going to do a little shopping?' <br>
            Two: 'Yeah, I have to buy some presents for my parents.' <br>
            One: 'What's the occasion?' <br>
                Two: 'It's their anniversary.' <br>
            One: 'That's great. Well, you better get going. You don't want to be late.' <br>
            Two: 'I'll see you next time.' <br>
            One: 'Sure. Bye.'`

const modified = document.querySelector('.modified_text');
const but = document.querySelector('.button');

// для 1 задания text.replace(/'/g,`"`)
modified.innerHTML = `<h3>Измененный текст:</h3><br><h4>${text.replace(/\B'/g, `"`)}</h4>`


//console.log("-test@mail.ru".match(/^[a-zа-яё0-9._-]+@[a-zа-яё0-9_-]+\.[a-zа-яё]{2,4}$/iu))
//console.log("Иван".match(/^[a-zа-яё]/iu))
//console.log('+7(000)000-0000'.match(/^\+[7]{1}[\(]+\d{3}[\)]+\d{3}[\-]+\d{4}$/i))



but.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.querySelector('.input_1');
    const telephone = document.querySelector('.input_2');
    const email = document.querySelector('.input_3');

    const checkName = (name.value.match(/^[a-zа-яё]/giu));
    const checkTelephone = (telephone.value.match(/^\+[7]{1}[\(]+\d{3}[\)]+\d{3}[\-]+\d{4}$/g));
    const checkEmail = (email.value.match(/^[a-zа-яё0-9]+@[a-zа-яё0-9_-]+\.[a-zа-яё]{2,4}$/giu))

    if (checkName == null) {
        name.style.border = "2px solid red "
        name.placeholder = 'Введено неверное имя'
        name.value = ''
    } else {
        name.removeAttribute("style")
    }

    if (checkTelephone == null) {
        telephone.style.border = "2px solid red "
        telephone.placeholder = "Формат телефона введен не верно"
        telephone.value = ''
    } else {
        telephone.removeAttribute("style")
    }

    if (checkEmail == null) {
        email.style.border = "2px solid red "
        email.placeholder = "Неверный формат почты"
        email.value = ''
    } else {
        email.removeAttribute("style")
    }
})

