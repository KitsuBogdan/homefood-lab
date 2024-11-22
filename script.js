const menu_dishes = [
    {
        category: "Супчики",
        dishes: [
            "Борщ",
            "Зелений борщ",
            "Солянка",
            "Суп з фрикадельками",
            "Гарбузовий крем-суп",
            "Сирний крем-суп з грибами",
            "Суп з горохом"
        ]
    },
    {
        category: "Гарніри",
        dishes: [
            "Картопляне пюре",
            "Печена картопля",
            "Смажена картопля",
            "Гречка",
            "Рис з овочами",
            "Тушкована капуста",
            "Гарбузова каша",
            "Плов",
            "Овочеве рагу",
            "Печеня"
        ]
    },
    {
        category: "Пасти",
        dishes: [
            "Паста з морепродуктами",
            "Паста з курочкою в вершковому соусі",
            "Паста болоньєзе",
            "Сирна паста",
            "Фунчоза з курочкою"
        ]
    },
    {
        category: "Салатики",
        dishes: [
            "Олів'є",
            "Крайовий",
            "Вінегрет",
            "Цезар",
            "Класичний"
        ]
    },
    {
        category: "М'яско",
        dishes: [
            "Гомілочки запечені",
            "Котлета по-київськи",
            "Котлетки зі свинини",
            "Голубці",
            "М'ясо по-французьки",
            "Жульєн"
        ]
    },
    {
        category: "Десерти",
        dishes: [
            "Пиріг з яблуками",
            "П'яна вишня",
            "Медовик",
            "Сирна запіканка",
            "Кекси",
            "Налисники"
        ]
    },
    {
        category: "Інше",
        dishes: [
            "Піца",
            "Круасани з шинкою і сиром",
            "Пельмені",
            "Вареники"
        ]
    },
    {
        category: "Сніданки",
        dishes: [
            "Омлет/глазунья",
            "Сирники",
            "Оладки",
            "Авокадо-тост"
        ]
    }
];

const menu = document.querySelector('.menu');
const menu_items = document.querySelectorAll('.menu-item');
let activated = false;

menu_items.forEach((item) => {
    item.addEventListener('click', () => {
        // Перевіряємо, чи вже активований список
        const existingList = item.querySelector('ul');
        
        if (activated && existingList) {
            // Якщо список вже активований, видаляємо його
            existingList.remove();
            // Показуємо всі елементи меню
            menu_items.forEach((menuItem) => {
                menuItem.style.display = "block";
            });
            activated = false; // Скидаємо прапорець
        } else {
            const heading = item.querySelector('h3');
            if (heading) {
                const categoryName = heading.textContent.trim(); // Назва категорії
    
                // Приховуємо всі елементи меню
                menu_items.forEach((menuItem) => {
                    menuItem.style.display = "none";
                });
    
                // Показуємо лише натиснутий елемент
                item.style.display = "block";
    
                // Знаходимо відповідну категорію з menu_dishes
                const category = menu_dishes.find(menuCategory => menuCategory.category === categoryName);
    
                if (category) {
                    // Створюємо список страв
                    const dishesList = document.createElement('ul');
                    
                    category.dishes.forEach(dish => {
                        const listItem = document.createElement('li');
                        listItem.textContent = dish;
                        dishesList.appendChild(listItem);
                    });
    
                    // Додаємо список страв до поточного елемента
                    item.appendChild(dishesList);
                    activated = true; // Встановлюємо прапорець, що меню активовано
                } else {
                    alert("Категорія не знайдена!");
                }
            } else {
                alert("Елемент <h3> не знайдено!");
            }
        }
    });
});
