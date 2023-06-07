const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./Routes/product');

const app = express();

// Middleware pour analyser le contenu du corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connexion à la base de données
mongoose.connect('mongodb+srv://angelo:a@casio.xgnv6ac.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connexion à la base de données établie');

    // Routes pour gérer les produits
    app.use('/api', productRoutes);

    app.get('/api/data', (req, res) => {
 
      });

    app.listen(3000, () => {
      console.log('Serveur en écoute sur le port 3000');
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
  });