const { post } = require('../Routes/product');
const product = require('../models/Product');


// exports.getById = (req,res ,next => {
//   const postId = req.params.id;
//   post.findById(id).then(post => {

// res.status(200).json({
//   message :"post found! ",
//   post: post 
// })
//   }).catch(error =>{
//     if(!error.statusCode) {
//       error.statusCode = 500
//     }
//     next(err)
//   })


// })


exports.getProducts = (req, res) => {
    res.status(200).json({
      posts: [
        {
            
            _id: "647f20d0929a5994e72e02e10" , 
            titles:"NP2576WM01 Analog Watch - For Women",
            brand_names:"Titan",
            images_links:"https://rukminim1.flixcart.com/image/612/612/l13whow0/watch/h/c/c/-ori…",
            prices:"₹3,754",
            offers:"20% off",
            Gender:"Women",
            Type:"Analog"

        },
      ],
    });
  };


  exports.deletProduct =(req,res) => {
    const id = req.params.id;
    product.findByIdAndDelete(id)

    .then((deletedProduct) => {
        if (!deletedProduct) {
          return res.status(404).json({ error: 'Produit non trouvé' });
        }
        res.send('Produit supprimé avec succès');
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression du produit :', error);
        res.status(500).json({ error: 'Erreur lors de la suppression du produit' });
      });
  }

  exports.updateProduct = (req,res) => {
    const id = req.params.id;
    const updateData = req.body;


  product.findByIdAndUpdate(id, updateData, { new: true })
    .then((updatedProduct) => {
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Produit non trouvé' });
      }
      res.json(updatedProduct);
    })
    .catch((error) => {
      console.error('Erreur lors de la mise à jour du produit :', error);
      res.status(500).json({ error: 'Erreur lors de la mise à jour du produit' });
    });
};

  
  exports.createProduct = (req, res) => {

    const id = req.body.id;
    const titles = req.body.titles;
    const brand_names = req.body.brand_names;
    const prices = req.body.prices;
    const offers = req.body.offers;
    const Gender = req.body.Gender;
    const Type = req.body.Type;


    
    // Creates a post in a mongo database
  
    res.status(201).json({
      message: "Product created successfully",

      product: {

        _id: new Date().toISOString(),
        id: id,
        titles:titles,
        brand_names:brand_names,
        prices:prices,
        offers:offers,
        Gender:Gender,
        Type:Type,

      },
    });
  };
  