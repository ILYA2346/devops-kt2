const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Выводим текущее время запроса в консоль
  console.log(`Request received at: ${new Date().toISOString()} (Время по Гринвичу)`);
  
  // Возвращаем ответ
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from KT2\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
