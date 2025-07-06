# 🎬 React Movies App
Это React-приложение использует API [Movies & TV Shows Database](https://rapidapi.com/amrelrafie/api/movies-tv-shows-database) для отображения популярных фильмов, их деталей и изображений.

## 🚀 Функциональность
- Получение трендовых фильмов
- Поиск фильмов по названию
- Получение подробностей по IMDb ID
- Получение изображений фильмов

## 🔑 Получение API ключа
1. Перейдите на страницу API:  
   👉 [https://rapidapi.com/amrelrafie/api/movies-tv-shows-database](https://rapidapi.com/amrelrafie/api/movies-tv-shows-database)
2. Авторизуйтесь (или зарегистрируйтесь на RapidAPI).
3. Подпишитесь на бесплатный тариф (Free).
4. Перейдите во вкладку **Endpoints** → найдите ваш API ключ в заголовке `x-rapidapi-key`.

## 🛠 Настройка проекта
### 1. Клонирование проекта
```bash
git clone https://https://github.com/suzerain-r/tt-oitech-react.git
cd tt-oitech-react
npm install
```

Откройте файл src/api/api.js и замените 'your_api_key' на ваш RapidAPI ключ:

const HEADERS = {
'x-rapidapi-key': 'your_api_key',
'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com'
};

## ▶️ Запуск приложения
npm start

