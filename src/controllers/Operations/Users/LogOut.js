
const logOut = (req, res)=> {
   
    if (req.session?.user) {

        req.session.destroy(()=>{
            res.json({status: 'succed'})
        })

    } else {

        res.json({status: 'Session failed'});

    }
}

export default logOut;