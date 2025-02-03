[Switch to English Language](README.md)

# Сайт Геотэк-Колледжа

Это проект [Next.js](https://nextjs.org), созданный с помощью [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Начало работы

Сначала склонируйте репозиторий:
```bash
git clone https://github.com/MOSTDORGEOTREST/geotek_college_website.git
# или
git clone git@github.com:MOSTDORGEOTREST/geotek_college_website.git
```

Затем перейдите в директорию проекта:
```bash
cd geotek_college_website
```

### Режим разработки
Чтобы запустить сервер разработки:
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
# или
bun dev
```
Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

Вы можете начать редактирование страницы, изменив файл `app/page.tsx`. Страница автоматически обновляется при изменении файла.

### Продакшен сборка
Для создания и запуска production версии без Docker:
```bash
npm install && npm run build && npm run start
# или
yarn && yarn build && yarn start
# или
pnpm && pnpm build && pnpm start
# или
bun install && bun run build && bun start
```

### Docker развёртывание
Для обновления docker-compose внутри проекта просто запустите файл Updater.sh от root в корне проекта.

Для ручного обновления Docker без использования Updater:
1. Соберите приложение:
```bash
docker-compose run --rm app sh -c "npm install && npm run build"
```
2. Пересоздайте контейнеры:
```bash
docker-compose up --force-recreate --build -d
```

Этот проект использует [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) для автоматической оптимизации и загрузки [Geist](https://vercel.com/font), нового семейства шрифтов для Vercel.

## Узнать больше
- [Документация Next.js](https://nextjs.org/docs) - узнайте о возможностях и API Next.js.
- [Изучите Next.js](https://nextjs.org/learn) - интерактивный учебник по Next.js.
Посмотрите [репозиторий Next.js на GitHub](https://github.com/vercel/next.js) - ваши отзывы и вклад приветствуются!

## Развертывание на Vercel
Самый простой способ развернуть ваше приложение Next.js - использовать [Платформу Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) от создателей Next.js.
Ознакомьтесь с  [документацией по развертыванию Next.js](https://nextjs.org/docs/app/building-your-application/deploying) для получения дополнительной информации.
```

