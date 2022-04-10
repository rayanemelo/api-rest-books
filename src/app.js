import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

//Criação da conexão do banco  
db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {//Abrir conexão, evento "open"
  console.log('Conexão com o banco: success!')
});

const app = express();
app.use(express.json());

routes(app);

export default app;
