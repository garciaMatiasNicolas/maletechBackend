import userModel from "../../../models/usersSchema.js";
import bcrypt from 'bcryptjs';

const singUp  = async (req, res) => {
    // GET THE DATA FROM THE BODY REQUEST
    let {fullname, identification, email, password, type, phone, location, adress} = req.body;

    // CREATE AN USER FROM MY SCHEMA DECLARED WITH THE REQUEST DATA AND USE A MONGOOSE FUNCTION TO SAVED IT IN MY DATABASE
    try{
        let find = userModel.find({email: email})

        if(find._fields !== undefined){
            res.json({status: 'error'});
        } else {
            const hashPassword = await bcrypt.hash(password, 10);

            let user = new userModel({
                fullname: fullname,
                identification: identification,
                email: email,
                password : hashPassword,
                type: type,
                phone: phone,
                location: location,
                adress: adress
            });

            await user.save();

            res.json(user._id);
        }
    } catch(err){
        console.error(err)
    }
}

export default singUp