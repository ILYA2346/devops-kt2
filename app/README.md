npm install --package-lock-only

Создаем образ
docker build -t kt2-app:1.0 .

docker rm kt2-container
Запускаем контейнер из образа
docker run -d --name kt2-container -p 3000:3000 kt2-app:1.0

Проверка работы, запускаем в терминале команду 
curl http://localhost:3000

проверить логи
docker logs kt2-container


docker compose up -d

docker compose ps

docker compose down

docker volume ls