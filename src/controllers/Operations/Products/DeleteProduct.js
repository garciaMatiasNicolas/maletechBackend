import productModel from '../../../models/productSchema.js';

const deleteProduct = ()=>{
    async (req, res)=> {
        // RECEIVES THE ID OF THE PRODUCT BY ROUTE PARAMETER, AND DELETES IT, THEN RETURNS THE UPDATED STOCK OF PRODUCTS IN JSON FORMAT
        let id = req.params.id;
    
        try{
    
            let deletedProduct = await productModel.deleteOne({_id: id});
            console.log(deletedProduct);
            let products = await productModel.find({})
            res.json(products);
    
        } catch(err){
            console.error(err)
        }
    }
}

export default deleteProduct