import productModel from '../../../models/productSchema.js';

const create = async (req, res)=> {
    // GET THE DATA FROM THE BODY REQUEST
    let data = req.body;
    
    // CREATE AN OBJECT FROM MY SCHEMA DECLARED WITH THE REQUEST DATA AND USE A MONGOOSE FUNCTION TO SAVED IT IN MY DATABASE
    try {
        let product = new productModel({
            category: data.category,
            name : data.name,
            stock : data.stock,
            description: data.description,
            price: data.price  
        });
        await product.save();
        res.json(product)
    } catch (err){
        console.error(err)
    }
}

export default create