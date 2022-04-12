import express from 'express';
import LivrosController from '../controllers/livrosController.js';

const router = express.Router();
//As rotas devem estar na ordem do mais especifico ao menos.
router
  .get("/livros", LivrosController.listarLivros)
  .get("/livros/busca/", LivrosController.listarLivroPorEditora)
  .get("/livros/:id", LivrosController.listarLivroPorId)
  .post("/livros", LivrosController.cadastrarLivro)
  .put("/livros/:id", LivrosController.atualizarLivros)
  .delete("/livros/:id", LivrosController.deletarLivro)

export default router;