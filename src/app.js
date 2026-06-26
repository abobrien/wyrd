import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Logging
app.use(morgan("dev"));
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Static files
app.use(express.static("./src/dist"));

// UX Framework
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));

// Routes
app.get("/", (req, res) => {
    res.render("home", {
        title: "Wyrd",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Server online",
    });
});

// Routers
import appRouter from "./routes/routes.js";
app.use("/routes", appRouter);

// Fallback routes
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
});

// Global error handler
app.use((err, req, res, next) => {
    res.render("error/404");
});

export default app;