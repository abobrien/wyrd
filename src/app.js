import express from "express";
import cors from "cors";

const app = express();

// Logging
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Static files
app.use(express.static("./src/dist"));

// UX Frameworks
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

// Routes
app.get("/", (req, res) => {
    res.render("home", {
        pageTitle: "Wyrd",
    });
});

// Routers
import gameRouter from "./routes/gameRoutes.js";
app.use("/game", gameRouter);

import copendiumRouter from "./routes/copendiumRoutes.js";
app.use("/copendium", copendiumRouter);

// Fallback route & global error handler
// app.use((req, res, next) => {
//     const error = new Error(`Not Found - ${req.originalUrl}`);
//     error.statusCode = 404;
//     next(error);
// });

// app.use((err, req, res, next) => {
//     res.render("error/404");
// });

export default app;