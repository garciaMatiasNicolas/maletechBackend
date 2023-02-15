import userModel from "../../../models/usersSchema.js";
import bcrypt from 'bcryptjs';
import { createTransport } from "nodemailer";

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
            
            const transporter = createTransport({
                service:'gmail',
                port:'587',
                auth:{
                    user:'garciamatias159@gmail.com',
                    pass:'rmztnxzesgrsnpbx'
                }
            });

            const mailOptions = {
                from: 'garciamatias159@gmail.com',
                to: 'garciamatias159@gmail.com',
                subject: 'Nuevo usuario registrado',
                html: ` 
                    nombre completo: ${fullname},
                    email:: ${email},
                    telefono: ${phone}
                `
            };

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
            const info = await transporter.sendMail(mailOptions)
            res.json(user._id, info);
        }
    } catch(err){
        console.error(err)
    }
}

export default singUp