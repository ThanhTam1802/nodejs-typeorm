import "reflect-metadata";
import { createConnection } from "typeorm";
import { Request, Response } from "express";
import * as express from 'express';
import * as bodyParser from "body-parser";

//Modules
// import customer from './controllers/customer';

//Routes
import { AppRoutes } from './routes';

// Database connection
createConnection()
    .then(async (connection) => {
        console.log("Connect to DB success")

        const app = express();
        //app config
        app.use(express.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(express.json());


        // app.use('/api/customer', customer)
        // register all application routes
        AppRoutes.forEach(route => {
            app[route.method](route.path, (req: Request, res: Response, next: Function) => {
                route.action(req, res)
                    .then(() => next)
                    .catch(err => next(err));
            });
        });

        app.listen(8000, () => console.log('listen to port 8000'))

    })
    .catch(error => console.log("ERROR: " + error));



