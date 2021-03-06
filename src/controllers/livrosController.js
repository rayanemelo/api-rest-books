import books from '../models/Livro.js';

class LivroController {

  //GET
  static listarLivros = (req, res) => {
    books.find()
      .populate('autor')
      .exec((err, books) => res.status(200).json(books))
  }

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    books.findById(id)
      .populate('autor', 'nome')
      .exec((err, books) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - ID do livro não localizado` })
        } else {
          res.status(200).send(books)
        }
      })
  }
  //POST
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
  //PUT
  static atualizarLivros = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso!" })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }
  //DELETE
  static deletarLivro = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com sucesso!" })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static listarLivroPorEditora = (req, res) => {
    const editora = req.query.editora //params concatenados
    //Buscar pela editora. Critério de busca: editora param
    books.find({ 'editora': editora }, {}, (err, books) => {
      res.status(200).send(books);
    })
  }
};

export default LivroController;