import productModel from '../../../models/productSchema.js';

const readAll = async (_, res)=> {
    // RETURN ALL THE PRODUCTS FROM MY DATABASE IN JSON FORMAT
    try{

        let products = await productModel.find({});
        res.json(products);

    } catch(err){
        console.error(err)
    }
}

export default readAll