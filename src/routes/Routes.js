import express from 'express';
import controllers from '../controllers/Controller.js';
import userModel from '../models/usersSchema.js';
const { Router } = express;

// CREATE MY ROUTES
const routeProducts = Router();

const routeUsers = Router();

// ENDPOINTS WITH REQUESTS PRODUCTS
routeProducts.post('/', controllers.create);

routeProducts.get('/:id', controllers.readById);

routeProducts.get('/', controllers.readAll);

routeProducts.delete('/:id', controllers.deleteProduct);

routeProducts.put('/:id', controllers.updateProduct);

// ENDPOINTS WITH REQUESTS USERS
routeUsers.post('/sign-up', controllers.singUp);

routeUsers.delete('/log-out', controllers.logOut);

routeUsers.get('/:id', controllers.getUser);

routeUsers.post('/log-in', async (req, res)=> {
    
    let { email, password } = req.body;
    
    let user = await userModel.findOne({email: email, password: password});
    
    if(user === null){
        res.json({status: 'error'});
    } else {
        req.session.user = email;
        res.json({status:'ok', userId: user._id});
    }

});

// EXPORT THE ROUTE 
export {routeProducts, routeUsers}