require('./config/dotenv')(); // Configura o .env (Deve ser o primeiro comando do código)
require('./config/sequelize');// Configura o sequelize (Deve ser chamado depois do dotenv)

const express = require('express');
const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at ${process.env.APP_URL}`);
});
