const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];

// Функция для формирования верстки каждого товара
/* const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};
renderPage(products); */

// Задание 1 Добавьте стили для верхнего меню, товара, списка товаров и кнопки вызова корзины.
// выполнено в style.css



//Задание 2 Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?

/* const renderPage = list => {
    const productsList = list.map(({ title = `name not specified`, price = `price not specified` }) =>
        `<div class="product-item">
        <h3>${title}</h3>
        <p>${price} у.е.</p>
        <button class="buy-btn">Купить</button>
        </div>`).join('')
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products); */



//Задание 3 Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?

/* мы берем массив из 4х продуктов на его основе через .map создаем новый массив,
вместо кажого продукта мы кладем огромную строку верстки и у нас получается массив из 4х строк
дальше мы в .innerHTML подаем массив, когда мы пытаемся использовать массив
в качестве строки (.innerHTML принимает в себя строку), у массива срабатывает внутренний метод
tostring (приведение к строке), этот метод у массива скрыт, но он используется сразу как только
мы пытаемся использовать массив как строку (к примеру: соеденить массив со строкой или засунуть
массив в .innerHTML, обернуть в объект string итд...) выполняя операции над массивом он
перечисляет каждый элемент через запятую.

убрать запятые нам помогут 2 варианта
1) .join('') Строковый аргумент, с помощью которого будут соединены в строку все элементы массива.
   Если аргумент не задан, элементы будут соединены запятыми.
   В данном случае мы как бы переопределяем с помощью чего будут соеденены элементы, вместо запятой пустое значение

2) Вариант посложнее черз .reduce выглядеть будет так:
*/

const renderPage = list => {
    const productsList = list.map(({ title = `name not specified`, price = `price not specified` }) =>
        `<div class="product-item">
        <h3>${title}</h3>
        <p>${price} $ </p>
        <button class="buy-btn">Купить</button>
        </div>`).reduce((renderProduct, elem) => `${renderProduct}${elem}`)
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);
