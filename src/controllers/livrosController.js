import books from '../models/Livro.js';

class LivroController {

  static listarLivros = (req, res) => {
    books.find((err, books) =>
      res.status(200).json(books))
  }

  static cadastrarLivro = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar o livro. ` })
      } else {
        res.status(201).send(book.toJSON());
      }
    })
  }

};

export default LivroController;