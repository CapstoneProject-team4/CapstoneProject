const express = require('express')
const usersRouter = express.Router();

const {
    createUser,
    getUser,
    getUserByEmail,
    getAllUser,
    getUserById,
} = require('../db');

const jwt = require('jsonwebtoken');
const { requireAdmin } = require('./utils');

usersRouter.get('/',requireAdmin, async( req, res, next) => {
    try {
        const users = await getAllUser();

        res.send({
            users
        });
    } catch (error) {
        console.log(error)
        next(error)
    }
});
usersRouter.get('/:id', requireAdmin, async( req, res, next) => {
    try {
       
        const {id} = req.params;
        const user = await getUserById(id);
        res.send(user);
    } catch (error) {
      console.log(error);
        next(error)
    }
}); 

usersRouter.post('/login', async(req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password) {
        next({
            name: 'MissingCredentialsError',
            message: 'Please supply both an email and password'
        });
    }
    try {
        const user = await getUser({email, password});
        if(user) {
            const token = jwt.sign({
                id: user.id,
                email
            }, process.env.JWT_SECRET, {
                expiresIn: '1w'
            });

            res.send({
                user,
                message: 'Login successful!',
                token
            });
        }
        else {
            next({
                name: 'IncorrectCredentialsError',
                message: 'Username or password is incorrect'
            });
        }
    } catch(err) {
        next(err);
    }
});

usersRouter.post('/register', async(req, res, next) => {
    const { role,name, email, password,billingaddress,phonenumber } = req.body;

    try {
        const _user = await getUserByEmail(email);

        if(_user) {
            next({
                name: 'UserExistsError',
                message: 'A user with that email already exists'
            });
        }

        const user = await createUser({
            role,
            name,
            email,
            password,
            billingaddress,
            phonenumber,
        });

        const token = jwt.sign({
            id: user.id,
            email
        }, process.env.JWT_SECRET, {
            expiresIn: '1w'
        });

        res.send({
            message: 'Sign up successful!',
            token
        });
    } catch({name, message}) {
        next({name, message})
    }
})



module.exports = usersRouter;