import express from 'express';
import books from './livrosRoutes.js';
import autores from './autoresRoutes.js';


const routes = (app) => {
  app.route('/').get((req, res) =>
    res.status(200).send({ titulo: "api rest - books" }));

  app.use(
    express.json(),
    books,
    autores
  )
};

export default routes;