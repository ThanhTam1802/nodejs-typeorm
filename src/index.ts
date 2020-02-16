import "reflect-metadata";
import { createConnection } from "typeorm";
import { Customer } from "./entity/Customer";

import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

app.use('/graphql', graphqlHTTP({
    
}));


createConnection()
    .then(async (connection) => {

        // console.log("Inserting a new user into the database...");
        // const user = new Customer();
        // user.firstName = "Timber";
        // await connection.manager.save(user);
        // console.log("Saved a new user with id: " + user.id);

        // console.log("Loading users from the database...");
        // const users = await connection.manager.find(Customer);
        // console.log("Loaded users: ", users);

        // console.log("Here you can setup and run express/koa/any other framework.");

    }).catch(error => console.log(error));
