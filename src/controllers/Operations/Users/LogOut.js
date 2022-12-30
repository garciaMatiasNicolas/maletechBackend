import express from 'express';
import session from "express-session";

const logOut = (req, res)=> {
    if (req.session?.user) {

        res.json({session: 'Ok!'});

        console.log(req.session.user);

    } else {

        res.json({status: 'Session failed'});

    }
}

export default logOut;