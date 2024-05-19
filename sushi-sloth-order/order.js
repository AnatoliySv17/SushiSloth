document.addEventListener('DOMContentLoaded', function() {
    const stripe = Stripe('pk_test_51PHresLYzooVbUdAJ4yGNNLO8Fk9XmjKkQ03d6xaBYaXBWPXaEwhPZ1bEUOegQlbxs6DAW58H4m2Pj9vfSiBtbf700uotUREnc'); // Замість YOUR_PUBLISHABLE_KEY використовуйте ваш публічний ключ
    const elements = stripe.elements();
    const card = elements.create('card');
    card.mount('#card-element');

    const form = document.getElementById('order-form');
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const { token, error } = await stripe.createToken(card);

            if (error) {
                const errorElement = document.getElementById('card-errors');
                if (errorElement) {
                    errorElement.textContent = error.message;
                }
            } else {
                stripeTokenHandler(token);
            }
        });
    }

    function stripeTokenHandler(token) {
        const form = document.getElementById('order-form');
        const hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token.id);
        if (form) {
            form.appendChild(hiddenInput);
            form.submit();
        }
    }

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const deliveryFee = 1.59;
    let totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + deliveryFee;

    const totalProductsCountElement = document.getElementById('total-products-count');
    const totalAmountElement = document.getElementById('total-amount');
    if (totalProductsCountElement && totalAmountElement) {
        totalProductsCountElement.innerText = cart.length;
        totalAmountElement.innerText = totalAmount.toFixed(2) + " грн";
    }

    const orderItems = document.getElementById('order-items');
    if (orderItems) {
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.quantity}x</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)} грн</td>
            `;
            orderItems.appendChild(row);
        });
    }

    function setLanguage(lang) {
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageDropdown) {
            languageDropdown.innerText = lang;
        }
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[key]) {
                element.innerText = translations[key][lang.toLowerCase()];
            }
        });
    }

    const translations = {
        'your-order': { 'ua': 'Ваше замовлення', 'en': 'Your order' },
        'total-products': { 'ua': 'Загальна кількість продуктів у вашому кошику', 'en': 'Total number of products in your cart' },
        'quantity': { 'ua': 'Кількість', 'en': 'Quantity' },
        'product': { 'ua': 'Продукт', 'en': 'Product' },
        'price': { 'ua': 'Ціна', 'en': 'Price' },
        'delivery': { 'ua': 'Доставка', 'en': 'Delivery' },
        'total-amount': { 'ua': 'Загальна сума', 'en': 'Total amount' },
        'additional-products': { 'ua': 'Бажаєте ще щось?', 'en': 'Do you still have appetite for something?' },
        'contact-information': { 'ua': 'Контактна інформація', 'en': 'Contact information' },
        'first-name': { 'ua': 'Ім\'я', 'en': 'First name' },
        'surname': { 'ua': 'Прізвище', 'en': 'Surname' },
        'telephone': { 'ua': 'Телефон', 'en': 'Telephone' },
        'email': { 'ua': 'Електронна пошта', 'en': 'E-mail' },
        'delivery-address': { 'ua': 'Адреса доставки', 'en': 'Delivery address' },
        'address': { 'ua': 'Адреса', 'en': 'Address' },
        'address-specification': { 'ua': 'Додатково до адреси', 'en': 'Address specification' },
        'payment-type': { 'ua': 'Спосіб оплати', 'en': 'Payment type' },
        'card-online': { 'ua': 'Картка онлайн', 'en': 'Card online' },
        'cash': { 'ua': 'Готівка', 'en': 'Cash' },
        'age-confirmation': { 'ua': 'Мені виповнилося 16 років', 'en': 'I am at least 16 years old' },
        'terms-acceptance': { 'ua': 'Я погоджуюся з умовами та положеннями ... і обробкою персональних даних', 'en': 'I agree to the terms and conditions of ... and personal data processing' },
        'pay-online': { 'ua': 'Оплатити карткою онлайн', 'en': 'Pay by online card' },
        'minimum': { 'ua': 'Мінімум: 5,00 грн', 'en': 'Minimum: 5,00 грн' },
        'delivery-free': { 'ua': 'Доставка: 1,59 грн', 'en': 'Delivery: 1,59 грн' },
        'delivery-time': { 'ua': 'Час доставки: 35 - 45 хв.', 'en': 'Delivery time: 35 - 45 min.' },
        'navigation': { 'ua': 'НАВІГАЦІЯ', 'en': 'NAVIGATION' },
        'social': { 'ua': 'Соц. мережі', 'en': 'Social Networks' },
        'contacts': { 'ua': 'Контакти', 'en': 'Contacts' },
        'phone': { 'ua': 'Телефон: +38 012 345 6789', 'en': 'Phone: +38 012 345 6789' },
        'address': { 'ua': 'Адреса: вул. Суші, 1, Київ, Україна', 'en': 'Address: Sushi St, 1, Kyiv, Ukraine' }
    };

    window.setLanguage = setLanguage;

    const additionalProducts = [
        {
            name: 'Суші Каліфорнія',
            price: 120,
            img: 'images/sushi-california.jpg'
        },
        {
            name: 'Рамен з куркою',
            price: 150,
            img: 'images/ramen-chicken.jpg'
        },
        {
            name: 'Темпура креветки',
            price: 200,
            img: 'images/tempura-shrimp.jpg'
        },
        {
            name: 'Суші Філадельфія',
            price: 180,
            img: 'images/sushi-philadelphia.jpg'
        },
        {
            name: 'Десерт Мочі',
            price: 80,
            img: 'images/mochi-dessert.jpg'
        },
        {
            name: 'Суші з вугром',
            price: 150,
            img: 'images/sushi-eel.jpg'
        },
        {
            name: 'Рамен зі свининою',
            price: 160,
            img: 'images/ramen-pork.jpg'
        },
        {
            name: 'Темпура овочі',
            price: 130,
            img: 'images/tempura-vegetables.jpg'
        },
        {
            name: 'Суші з тунцем',
            price: 190,
            img: 'images/sushi-tuna.jpg'
        },
        {
            name: 'Десерт Дораякі',
            price: 90,
            img: 'images/dorayaki.jpg'
        }
    ];

    const additionalProductsContainer = document.querySelector('.carousel-inner');
    if (additionalProductsContainer) {
        additionalProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('carousel-item');
            if (index === 0) {
                productCard.classList.add('active');
            }
            productCard.innerHTML = `
                <div class="additional-product card m-2">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price.toFixed(2)} грн</p>
                        <button class="btn btn-primary" onclick="addToOrder('${product.name}', ${product.price}, '${product.img}')">Додати в замовлення</button>
                    </div>
                </div>
            `;
            additionalProductsContainer.appendChild(productCard);
        });
    }

    window.addToOrder = function(name, price, img) {
        const existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ name, price, img, quantity: 1 });
        }
        updateCart();
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCart() {
        if (orderItems) {
            orderItems.innerHTML = '';
        }
        totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + deliveryFee;
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.quantity}x</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)} грн</td>
            `;
            if (orderItems) {
                orderItems.appendChild(row);
            }
        });
        if (totalProductsCountElement && totalAmountElement) {
            totalProductsCountElement.innerText = cart.length;
            totalAmountElement.innerText = totalAmount.toFixed(2) + " грн";
        }
    }

    // Редагування замовлення
    if (orderItems) {
        orderItems.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') {
                const id = e.target.getAttribute('data-id');
                removeFromCart(parseInt(id));
            }
        });
    }

    function removeFromCart(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCart();
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    // Зміна кнопки при виборі способу оплати
    const paymentTypeInputs = document.querySelectorAll('input[name="paymentType"]');
    paymentTypeInputs.forEach(input => {
        input.addEventListener('change', function() {
            const payButton = document.getElementById('pay-button');
            if (this.value === 'cash') {
                const deliveryAddress = document.querySelector('.delivery-address');
                if (deliveryAddress) {
                    deliveryAddress.style.display = 'none';
                }
                if (payButton) {
                    payButton.innerText = translations['cash'][document.getElementById('languageDropdown').innerText.toLowerCase()];
                }
            } else {
                const deliveryAddress = document.querySelector('.delivery-address');
                if (deliveryAddress) {
                    deliveryAddress.style.display = 'block';
                }
                if (payButton) {
                    payButton.innerText = translations['pay-online'][document.getElementById('languageDropdown').innerText.toLowerCase()];
                }
            }
        });
    });

    // Перевірка заповненості форми
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('input', function() {
            const form = this;
            const isValid = form.checkValidity();
            const payButton = document.getElementById('pay-button');
            if (payButton) {
                payButton.disabled = !isValid;
            }
        });
    }

    setLanguage('UA'); // Установити мову по замовчуванню як українську
});
