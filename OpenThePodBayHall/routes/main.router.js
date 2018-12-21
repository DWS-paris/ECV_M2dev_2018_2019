/*
Imports
*/
    const { Router } = require('express');
    const AuthRouterClass = require('./auth/auth.routes');
    const ChatRouterClass = require('./chat/chat.routes');
    const FrontRouterClass = require('./front/front.routes')
//

/* 
Passport Strategy
Passport est un module NPM qui permet de sécuriser les connexions utilisateur grâce à des stratégies spécifiques. Nous utilisons ici la startégie JWT (cf. setAuthentication)
*/
    const passport = require('passport');
    const { setAuthentication } = require('../services/authentication');
    setAuthentication(passport);
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();


    // Child
    const authRouter = new AuthRouterClass();
    const chatRouter = new ChatRouterClass( { passport } );
    const frontRouter = new FrontRouterClass();
//

/*
Configure routes
*/
    
    mainRouter.use('/api', apiRouter);
    apiRouter.use('/auth', authRouter.init());
    apiRouter.use('/chat', chatRouter.init());
    
    mainRouter.use('/', frontRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//