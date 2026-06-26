import { Router } from "express";
import { readFile } from "node:fs/promises";

const router = Router();

// Routes
router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Copendium routes online"
    });
});

router.get("/lore/cosmology", (req, res) => {
    res.render("copendium/lore/cosmology", {
        pageTitle: "Wyrd / Lore / Cosmology"
    });
});

router.get("/lore/aeld", (req, res) => {
    res.render("copendium/lore/aeld", {
        pageTitle: "Wyrd / Lore / Aeld"
    });
});

router.get("/lore/life", (req, res) => {
    res.render("copendium/lore/life", {
        pageTitle: "Wyrd / Lore / Everyday Life"
    });
});

export default router;