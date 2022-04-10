import books from '../models/Livro.js';

class LivroController {
  static listarLivros = (req, res) => {
    books.find((err, books) =>
      res.status(200).json(books)) //find: buscar todos os livros
  }
};

export default LivroController;