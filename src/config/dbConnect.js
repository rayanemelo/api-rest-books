import mongoose from 'mongoose';
//Conexão com o banco mongo
mongoose.connect("mongodb+srv://root:root@alura.4uz16.mongodb.net/api-rest-livros");

let db = mongoose.connection;

export default db;
