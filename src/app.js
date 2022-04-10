import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Livro.js';
import routes from './routes/index.js';

//Criação da conexão do banco ---
db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {//Abrir conexão, evento "open"
  console.log('Conexão com o banco: success!')
});

const app = express();

app.use(express.json());

routes(app);

app.get('/livros/:id', (req, res) => {
  let index = findBooks(req.params.id); //Pegando o id
  res.json(books[index]);
});

app.post('/livros', (req, res) => {
  books.push(req.body) //Mandar um novo livro, para o corpo da nossa req
});

app.put('/livros/:id', (req, res) => {
  let index = findBooks(req.params.id);
  books[index].titulo = req.body.titulo; //Através da posição, vamos alterar o titulo do livros
  res.json(books);
  res.status(200).send('Livro alterado com sucesso!')
});

app.delete('/livros/:id', (req, res) => {
  let { id } = req.params;
  let index = findBooks(id);
  books.splice(index, 1);
  res.send(`Livro ${id} apagado com sucesso!`)
});

//Mostrar a posição \
function findBooks(id) {
  return books.findIndex(book => book.id == id)
}

export default app;
