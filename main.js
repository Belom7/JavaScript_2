const oop = new Vue(
    {
        el: '.oop',
        data: {
            name: 'Maks',
            hello: 'Привет',
            text: '',
            counter: 0,
            link: 'https://yandex.ru',
            show: true,
            cek: true ,
            x: 0,
            y: 0,
            sis: `<a href='https://yandex.ru'>Yandex</a>`,
            products: [
                {
                    img: 'https://placehold.it/200x150',
                    title: 'Laptop',
                    price: 30000,
                    quantity: 1
                },
                {
                    img: 'https://placehold.it/200x150',
                    title: 'Keyboard',
                    price: 5000,
                    quantity: 1
                },
                {
                    img: 'https://placehold.it/200x150',
                    title: 'Mouse',
                    price: 3000,
                    quantity: 1
                },
            ]
        },
        methods: {
            sayHello(){
                return this.hello
            },
            increace(step) {
                this.counter += step
            },
            coordinates(){
                this.x = event.clientX;
                this.y = event.clientY;
            },
            dob(){
                product.quantity ++
            }
        }
        
    }
)