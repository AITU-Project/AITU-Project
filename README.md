<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  # Реестр повесток и вызовов

## Описание
Модуль «Реестр повесток и вызовов» предназначен для автоматизации процессов согласования вызовов субъектов предпринимательства для проведения следственных действий в рамках уголовных дел, созданных следователями.

## Функциональные возможности

### Логин
- Поля ввода: Email/Логин, Пароль.
- Кнопка "Войти".
- Ссылки: "Забыли пароль?", "Регистрация".
- Валидация: корректный email, минимум 6 символов пароля.
- Сообщения об ошибках: неверные данные, пустые поля.

### Профиль
- Отображение: Имя, Email, Дата регистрации, Профильное изображение.
- Редактирование: Имя, Email с кнопкой "Сохранить".
- Кнопка "Сменить пароль" и "Выход".
- Валидация: корректный email, непустое имя.
- Удаление аккаунта: Кнопка для запроса удаления аккаунта с подтверждением.

### Создание карточек
1. Система генерирует уникальный номер карточки Заключения.
2. Система фиксирует дату создания карточки Заключения.
3. Форма для создания карточки Заключения с автозаполнением и обязательными полями:
   - Регистрационный номер (генерируется системой).
   - Дата создания документа (генерируется системой).
   - Номер УД (обязательное поле).
   - Дата регистрации дела, статья УК, решение по делу и другие поля, связанные с расследуемым делом.
   - ИИН вызываемого, ФИО, должность, место работы, регион, статус и другие данные.
4. История вызовов с отображением информации о предыдущих вызовах.
5. Таблица «Путь согласования заключения» с данными о должности, статусах и действиях согласующих.

### Журнал заключений
1. В журнале отображается таблица с карточками заключений и следующими столбцами:
   - Регистрационный номер.
   - Дата создания документа.
   - ИИН вызываемого.
   - ФИО вызываемого.
   - Статья УК и другие поля.
   - Статус документа.
   - ФИО согласующего и действия.
2. Фильтры поиска для быстрого поиска карточек.
3. Кнопки для экспорта данных в форматах Excel и PDF.
4. Роли пользователей:
   - Сотрудники СУ могут редактировать карточки со статусом «В работе» или «Отправлено на доработку».
   - Аналитики СД и модераторы могут просматривать карточки со статусами «На согласовании», «Согласовано», «Отказано» и другие.
   - Аналитики СД (Согласующие) могут согласовывать, отклонять или отправлять на доработку карточки с возможностью указания причины.

## Разработка

Для реализации данного проекта используется фреймворк **NestJS**, который позволяет разрабатывать эффективные и масштабируемые серверные приложения на Node.js.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
