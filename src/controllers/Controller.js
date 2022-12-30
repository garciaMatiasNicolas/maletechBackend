import create from "./Operations/Products/CreateProduct.js"
import readById from "./Operations/Products/ReadById.js"
import readAll from "./Operations/Products/ReadAll.js"
import deleteProduct from "./Operations/Products/DeleteProduct.js"
import updateProduct from "./Operations/Products/UpdateProduct.js"
import logIn from "./Operations/Users/LogIn.js"
import singUp from "./Operations/Users/SignUp.js"
import logOut from "./Operations/Users/LogOut.js"
import getUser from "./Operations/Users/GetUser.js"

const controllers = {
    create,
    readById,
    readAll,
    deleteProduct,
    updateProduct, 
    logIn,
    singUp, 
    logOut,
    getUser
}

export default controllers 
