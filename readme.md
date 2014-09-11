# Exemplo de API com Express.js

Esta aplicação serve de exemplo para mostrar como montar APIs usando o
Express.js

### Instalação

```bash
git clone https://github.com/alanhoff/express-api-demo.git
cd express-api-demo
npm install
node app.js
``

### APIs

Existem duas APIs, uma para `login` e outra para `books`.

```
POST /api/v1/login
{"username": "admin", "password": "admin"}

Response 200:
{"token" : "hzxeyuxf0jy1b8712f7qs4nd"}

GET /api/v1/books
[uma array com livros]

POST /api/v1/books Authentication: hzxeyuxf0jy1b8712f7qs4nd
{
  "title": "Kama Sutra",
  "author": "Alan Hoffmeister",
  "pages": 999,
  "description": "As melhores 999 posições. Todas testadas.",
  "year": "2014",
  "edition": "2014/6"
}

Response 200:
{
  "_id": "hzxeyuxf0jy1b8712f7qs4nd"
  "title": "Kama Sutra",
  "author": "Alan Hoffmeister",
  "pages": 999,
  "description": "As melhores 999 posições. Todas testadas.",
  "year": "2014",
  "edition": "2014/6"
}
```

Para atualizar é só enviar um `PUT` para `/api/v1/:id` com toda a estrutura do
livro, ou um `DELETE` para a mesma URL para remove-lo.

### TODO

* Documentação
* Testes
* Mais coisas...

### Licença MIT

Copyright (c) 2014 Alan Hoffmeister

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


