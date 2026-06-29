import { Router } from "express";
import { readFile } from "node:fs/promises";

const router = Router();

// Session
const session = {
    "currentSection": "Lore"
}

// Routes
router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Copendium routes online"
    });
});

router.get("/lore/cosmology", (req, res) => {
    res.render("copendium/lore/cosmology", {
        pageTitle: "Wyrd / Lore / Cosmology",
        userSession: session
    });
});

router.get("/lore/history", (req, res) => {
    res.render("copendium/lore/history", {
        pageTitle: "Wyrd / Lore / History",
        userSession: session
    });
});

router.get("/lore/religion", (req, res) => {
    res.render("copendium/lore/religion", {
        pageTitle: "Wyrd / Lore / Religion",
        userSession: session
    });
});

router.get("/lore/society", (req, res) => {
    res.render("copendium/lore/society", {
        pageTitle: "Wyrd / Lore / Society",
        userSession: session
    });
});

router.get("/lore/magic", (req, res) => {
    res.render("copendium/lore/magic", {
        pageTitle: "Wyrd / Lore / Magic",
        userSession: session
    });
});

export default router;