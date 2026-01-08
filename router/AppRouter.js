import {Router} from "express";

const AppRouter = Router();

AppRouter.get ("/home", (req,res)=> {
    res.render("auth/home");
})

AppRouter.get ("/Add", (req,res)=> {
    res.render("auth/Add-expense");
});

AppRouter.get("/delete",(req,res)=> {
    res.render("auth/delete-expense");
});

AppRouter.get("/find",(req,res)=> {
    res.render("auth/edit-expense");
});

export default AppRouter;

