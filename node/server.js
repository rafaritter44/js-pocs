const http = require('http');

const people = new Map();
const counter = (() => {
  let count = 1;
  return () => count++;
})();

http.createServer((request, response) => {
  if (request.url.startsWith('/api/people')) {
    if (request.method === 'POST') {
      const requestBody = [];
      request.on('data', chunk => {
        requestBody.push(chunk);
      });
      request.on('end', () => {
        const parsedRequestBody = Buffer.concat(requestBody).toString();
        const person = JSON.parse(parsedRequestBody);
        const id = counter();
        person.id = id;
        people.set(id, person);
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 201;
        response.write(JSON.stringify(person));
        response.end();
      });
    } else if (request.method === 'GET') {
      const id = request.url.substring('/api/people/'.length);
      if (/[0-9]+/.test(id)) {
        const person = people.get(parseInt(id));
        if (person) {
          response.setHeader('Content-Type', 'application/json');
          response.write(JSON.stringify(person));
          response.end();
        } else {
          response.statusCode = 404;
          response.end();
        }
      } else {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(Object.fromEntries(people)));
        response.end();
      }
    } else {
      response.statusCode = 405;
      response.end();
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(3000);