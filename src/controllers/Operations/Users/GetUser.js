import userModel from "../../../models/usersSchema.js";

const getUser = async (req, res) => {
    let id = req.params.id;

    try{

        let user = await userModel.find({_id : id});
        res.json(user);

    } catch (err){
        console.error(err)
    }
}

export default getUser