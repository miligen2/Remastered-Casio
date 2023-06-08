const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Un schema determine la structure du document en base
const productSchema = new Schema({
    id:{
        type: Number,
    },
    titles: {
        type: String,
    },
    brand_names:{
        type:String,
    },
    images_links:{
        type:String,
    },
    prices:{
        type:String,
    },
    offers:{
        type:String,
    },
    Gender:{
        type:String,
    },
    Type:{
        type:String,
    },

});

mongoose.connect('mongodb+srv://angelo:a@casio.xgnv6ac.mongodb.net/')
.then(() => {
  console.log('Connexion à la base de données établie');
  // Démarrez votre application Express ici
})
.catch((error) => {
  console.error('Erreur lors de la connexion à la base de données :', error);
});

module.exports = mongoose.model("product", productSchema);