import express from "express";
import { config } from "dotenv";
import trackerRouter from "./router/trackerRouter.js";
import AppRouter from "./router/AppRouter.js";
import { join } from "path";

config ();
const App = express();
const port = process.env.Port || 8000;
const dirname = import.meta.dirname;

App.use(express.json());
App.use(express.urlencoded({extended : true}));


App.set("view engine","ejs");
App.set("views", join(dirname, "/view"));
App.use(express.static(join(dirname, "/public")));

App.use("/App",trackerRouter);
App.use("/",AppRouter);

App.listen (port,()=> {
    console.log(`server is working on port ${port}`);
}) 



