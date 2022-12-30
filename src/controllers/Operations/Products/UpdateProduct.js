import productModel from '../../../models/productSchema.js';

const updateProduct = async (req, res)=>{
    let id = req.params.id;
    let dataUpdated = req.body;

    try{
        let updatedProduct = await productModel.updateOne({_id: id}, {$set : {description: dataUpdated.description}})
    } catch(err){
        console.error(err)
    }
}

export default updateProduct