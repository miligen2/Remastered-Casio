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


  }
  exports.updateProduct = (req,res) => {

  }
  
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
  