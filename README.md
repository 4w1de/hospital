# hospital(server)
## Запуск
----- 
### Настройка БД
1. Запустить файл docker-compose.yaml в терминале с помощью команды docker-compose up
    * Будут установлены два контейнера postgres и pgadmin
2. Перейти на localhos:5050, так как там находится pgadmin, имя пользователя и пароль находятся в файле docker-compose.yaml
3. Далее ПКМ по Servers, Register->Server (or Create Server)
4. Необходимо заполнить поля:
  * General->Name - любое имя
  * Connection->Hostname - либо postgres, либо IPAddress контейнера postgres
  * Connection->Port - 5432
  * Connection->Maintenance database - postgres
  * Connection->Username - user
  * Connection->Password - password
5. Будет создан сервер и внутри него будет база данных hospital

### Настройка проекта
1. Запустить команду npm i
2. Запустить команду npm run migrate
    * Это нужно для того, чтобы в БД создались таблицы
3. Запустить команду npm run seeds
    * Это нужно для того, чтобы в созданные ранее таблицы занеслись "стартовые" значения
