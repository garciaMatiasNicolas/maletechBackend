import productModel from '../../../models/productSchema.js';

const readById = async (req, res)=>{
    let id = req.params.id;

    // FIND THE PRODUCT IN MY DATABASE FROM THE ID PASSED BY PARAMETER AND I RETURN IT IN JSON FORMAT
    try{

        let product = await productModel.find({_id : id});
        res.json(product);

    } catch (err){
        console.error(err)
    }
}

export default readById