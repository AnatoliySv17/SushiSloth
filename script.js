document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: 'Суші Каліфорнія',
            name_en: 'Sushi California',
            weight: '200г',
            weight_en: '200g',
            rating: 4.8,
            price: 120,
            category: 'sushi',
            img: 'images/sushi-california.jpg',
            quantity: 1
        },
        {
            id: 2,
            name: 'Рамен з куркою',
            name_en: 'Chicken Ramen',
            weight: '300г',
            weight_en: '300g',
            rating: 4.6,
            price: 150,
            category: 'ramen',
            img: 'images/ramen-chicken.jpg',
            quantity: 1
        },
        {
            id: 3,
            name: 'Темпура креветки',
            name_en: 'Tempura Shrimp',
            weight: '150г',
            weight_en: '150g',
            rating: 4.7,
            price: 200,
            category: 'tempura',
            img: 'images/tempura-shrimp.jpg',
            quantity: 1
        },
        {
            id: 4,
            name: 'Суші Філадельфія',
            name_en: 'Sushi Philadelphia',
            weight: '220г',
            weight_en: '220g',
            rating: 4.9,
            price: 180,
            category: 'sushi',
            img: 'images/sushi-philadelphia.jpg',
            quantity: 1
        },
        {
            id: 5,
            name: 'Десерт Мочі',
            name_en: 'Mochi Dessert',
            weight: '100г',
            weight_en: '100g',
            rating: 4.5,
            price: 80,
            category: 'dessert',
            img: 'images/mochi-dessert.jpg',
            quantity: 1
        },
        {
            id: 6,
            name: 'Суші з вугром',
            name_en: 'Sushi with Eel',
            weight: '200г',
            weight_en: '200g',
            rating: 4.8,
            price: 150,
            category: 'sushi',
            img: 'images/sushi-eel.jpg',
            quantity: 1
        },
        {
            id: 7,
            name: 'Рамен зі свининою',
            name_en: 'Pork Ramen',
            weight: '300г',
            weight_en: '300g',
            rating: 4.6,
            price: 160,
            category: 'ramen',
            img: 'images/ramen-pork.jpg',
            quantity: 1
        },
        {
            id: 8,
            name: 'Темпура овочі',
            name_en: 'Tempura Vegetables',
            weight: '150г',
            weight_en: '150g',
            rating: 4.7,
            price: 130,
            category: 'tempura',
            img: 'images/tempura-vegetables.jpg',
            quantity: 1
        },
        {
            id: 9,
            name: 'Суші з тунцем',
            name_en: 'Sushi with Tuna',
            weight: '220г',
            weight_en: '220g',
            rating: 4.9,
            price: 190,
            category: 'sushi',
            img: 'images/sushi-tuna.jpg',
            quantity: 1
        },
        {
            id: 10,
            name: 'Десерт Дораякі',
            name_en: 'Dorayaki Dessert',
            weight: '100г',
            weight_en: '100g',
            rating: 4.5,
            price: 90,
            category: 'dessert',
            img: 'images/dorayaki.jpg',
            quantity: 1
        },
        {
            id: 11,
            name: 'Суші з лососем',
            name_en: 'Sushi with Salmon',
            weight: '200г',
            weight_en: '200g',
            rating: 4.8,
            price: 140,
            category: 'sushi',
            img: 'images/sushi-salmon.jpg',
            quantity: 1
        },
        {
            id: 12,
            name: 'Рамен з овочами',
            name_en: 'Vegetable Ramen',
            weight: '300г',
            weight_en: '300g',
            rating: 4.6,
            price: 140,
            category: 'ramen',
            img: 'images/ramen-vegetable.jpg',
            quantity: 1
        },
        {
            id: 13,
            name: 'Темпура риба',
            name_en: 'Tempura Fish',
            weight: '150г',
            weight_en: '150g',
            rating: 4.7,
            price: 170,
            category: 'tempura',
            img: 'images/tempura-fish.jpg',
            quantity: 1
        },
        {
            id: 14,
            name: 'Суші з креветкою',
            name_en: 'Sushi with Shrimp',
            weight: '220г',
            weight_en: '220g',
            rating: 4.9,
            price: 200,
            category: 'sushi',
            img: 'images/sushi-shrimp.jpg',
            quantity: 1
        },
        {
            id: 15,
            name: 'Десерт Манго',
            name_en: 'Mango Dessert',
            weight: '100г',
            weight_en: '100g',
            rating: 4.5,
            price: 85,
            category: 'dessert',
            img: 'images/mango-dessert.jpg',
            quantity: 1
        },
        {
            id: 16,
            name: 'Суші з крабом',
            name_en: 'Sushi with Crab',
            weight: '200г',
            weight_en: '200g',
            rating: 4.8,
            price: 160,
            category: 'sushi',
            img: 'images/sushi-crab.jpg',
            quantity: 1
        },
        {
            id: 17,
            name: 'Рамен з яловичиною',
            name_en: 'Beef Ramen',
            weight: '300г',
            weight_en: '300g',
            rating: 4.6,
            price: 180,
            category: 'ramen',
            img: 'images/ramen-beef.jpg',
            quantity: 1
        },
        {
            id: 18,
            name: 'Темпура курка',
            name_en: 'Tempura Chicken',
            weight: '150г',
            weight_en: '150g',
            rating: 4.7,
            price: 150,
            category: 'tempura',
            img: 'images/tempura-chicken.jpg',
            quantity: 1
        },
        {
            id: 19,
            name: 'Суші з ікрою',
            name_en: 'Sushi with Caviar',
            weight: '220г',
            weight_en: '220g',
            rating: 4.9,
            price: 220,
            category: 'sushi',
            img: 'images/sushi-caviar.jpg',
            quantity: 1
        },
        {
            id: 20,
            name: 'Десерт Чізкейк',
            name_en: 'Cheesecake Dessert',
            weight: '100г',
            weight_en: '100g',
            rating: 4.5,
            price: 95,
            category: 'dessert',
            img: 'images/cheesecake-dessert.jpg',
            quantity: 1
        }
    ];
    
        const cart = [];
        let displayedProducts = 9;
    
        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotalPrice = document.getElementById('cart-total-price');
            cartItems.innerHTML = '';
            let totalPrice = 0;
    
            cart.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                li.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" class="img-fluid cart-item-img">
                    <span>${item.name}</span>
                    <input type="number" value="${item.quantity}" min="1" class="form-control form-control-sm mx-2" style="width: 60px;">
                    <span>${item.price * item.quantity} грн</span>
                    <button data-id="${item.id}" class="btn btn-danger btn-sm">X</button>
                `;
                cartItems.appendChild(li);
    
                const quantityInput = li.querySelector('input');
                const removeButton = li.querySelector('button');
    
                quantityInput.addEventListener('change', (e) => {
                    item.quantity = parseInt(e.target.value);
                    updateCart();
                });
    
                removeButton.addEventListener('click', () => {
                    removeFromCart(item.id);
                });
    
                totalPrice += item.price * item.quantity;
            });
    
            cartTotalPrice.textContent = totalPrice;
        }
    
        function addToCart(product) {
            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ ...product });
            }
            updateCart();
        }
    
        function removeFromCart(id) {
            const productIndex = cart.findIndex(item => item.id === id);
            if (productIndex > -1) {
                cart.splice(productIndex, 1);
            }
            updateCart();
        }
    
        function checkout() {
            if (cart.length === 0) {
                alert('Ваша корзина пуста!');
            } else {
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.href = "order.html";
            }
        }
        
        document.getElementById('checkout').addEventListener('click', checkout);        
    
        function displayProducts(filteredProducts) {
            const productsContainer = document.querySelector('.products');
            productsContainer.innerHTML = '';
            const productsToShow = filteredProducts.slice(0, displayedProducts);
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card', 'col-md-4', 'mb-4');
    
                productCard.innerHTML = `
                    <img src="${product.img}" alt="${product.name}" class="img-fluid">
                    <h3>${product.name}</h3>
                    <p data-lang="category">Категорія: ${product.category}</p>
                    <p data-lang="weight">Вага: ${product.weight}</p>
                    <p class="price">${product.price} грн</p>
                    <button class="btn btn-primary" data-lang="add-to-cart">Додати в корзину</button>
                `;
    
                productCard.querySelector('button').addEventListener('click', () => {
                    addToCart(product);
                });
    
                productsContainer.appendChild(productCard);
            });
        }
    
        function filterProducts() {
            const category = document.getElementById('filter-category').value;
            if (category === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            }
        }
    
        document.getElementById('checkout').addEventListener('click', checkout);
    
        displayProducts(products);
    
        document.getElementById('filter-category').addEventListener('change', filterProducts);
    
        document.getElementById('load-more').addEventListener('click', () => {
            displayedProducts += 9;
            filterProducts();
        });
    
        filterProducts();
    
        function scrollToCatalog() {
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }
    
        document.querySelector('.button-go').addEventListener('click', scrollToCatalog);
    
        function setLanguage(lang) {
            document.getElementById('languageDropdown').innerText = lang;
            const elements = document.querySelectorAll('[data-lang]');
            elements.forEach(element => {
                const key = element.getAttribute('data-lang');
                if (translations[key]) {
                    element.innerText = translations[key][lang.toLowerCase()];
                }
            });
            updateProductCards(lang);
        }
    
        function updateProductCards(lang) {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                if (lang === 'EN') {
                    card.querySelector('h3').innerText = products[index].name_en;
                    card.querySelector('p[data-lang="category"]').innerText = `Category: ${products[index].category}`;
                    card.querySelector('p[data-lang="weight"]').innerText = `Weight: ${products[index].weight_en}`;
                    card.querySelector('.price').innerText = `${products[index].price} грн`;
                    card.querySelector('button[data-lang="add-to-cart"]').innerText = translations['add-to-cart'].en;
                } else {
                    card.querySelector('h3').innerText = products[index].name;
                    card.querySelector('p[data-lang="category"]').innerText = `Категорія: ${products[index].category}`;
                    card.querySelector('p[data-lang="weight"]').innerText = `Вага: ${products[index].weight}`;
                    card.querySelector('.price').innerText = `${products[index].price} грн`;
                    card.querySelector('button[data-lang="add-to-cart"]').innerText = translations['add-to-cart'].ua;
                }
            });
        }
    
        const translations = {
            'order': {
                'ua': 'Моє замовлення',
                'en': 'My Order'
            },
            'news': {
                'ua': 'Новини',
                'en': 'News'
            },
            'home': {
                'ua': 'Головна',
                'en': 'Home'
            },
            'about': {
                'ua': 'Про нас',
                'en': 'About Us'
            },
            'help': {
                'ua': 'Допомога',
                'en': 'Help'
            },
            'slowly-enjoy': {
                'ua': 'Повільно, насолоджуйся смаком',
                'en': 'Slowly, Enjoy the Taste'
            },
            'order-now': {
                'ua': 'Замовити!!',
                'en': 'Order Now!!'
            },
            'all': {
                'ua': 'Все',
                'en': 'All'
            },
            'sushi': {
                'ua': 'Суші',
                'en': 'Sushi'
            },
            'ramen': {
                'ua': 'Рамен',
                'en': 'Ramen'
            },
            'tempura': {
                'ua': 'Темпура',
                'en': 'Tempura'
            },
            'dessert': {
                'ua': 'Десерти',
                'en': 'Desserts'
            },
            'cart': {
                'ua': 'Корзина',
                'en': 'Cart'
            },
            'total': {
                'ua': 'Всього:',
                'en': 'Total:'
            },
            'checkout': {
                'ua': 'Заказать',
                'en': 'Checkout'
            },
            'navigation': {
                'ua': 'НАВІГАЦІЯ',
                'en': 'NAVIGATION'
            },
            'social': {
                'ua': 'Соц. мережі',
                'en': 'Social Networks'
            },
            'contacts': {
                'ua': 'Контакти',
                'en': 'Contacts'
            },
            'phone': {
                'ua': 'Телефон: +38 012 345 6789',
                'en': 'Phone: +38 012 345 6789'
            },
            'address': {
                'ua': 'Адреса: вул. Суші, 1, Київ, Україна',
                'en': 'Address: Sushi St, 1, Kyiv, Ukraine'
            },
            'load-more': {
                'ua': 'Більше',
                'en': 'Load More'
            },
            'add-to-cart': {
                'ua': 'Додати в корзину',
                'en': 'Add to Cart'
            },
            'category': {
                'ua': 'Категорія',
                'en': 'Category'
            },
            'weight': {
                'ua': 'Вага',
                'en': 'Weight'
            }
        };
    
        window.setLanguage = setLanguage; // Экспортируем функцию для использования в HTML
    });
    