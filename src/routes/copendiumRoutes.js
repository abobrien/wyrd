import { Router } from "express";
import { readFile } from "node:fs/promises";

const router = Router();

// Session
import session from "../controllers/session/userSession.js";

// Routes
router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Copendium routes online"
    });
});

// Lore Pages
router.get("/lore/cosmology", (req, res) => {
    res.render("lore/cosmology", {
        pageTitle: "Wyrd / Lore / Cosmology",
        userSession: session
    });
});

router.get("/lore/history", (req, res) => {
    res.render("lore/history", {
        pageTitle: "Wyrd / Lore / History",
        userSession: session
    });
});

router.get("/lore/religion", (req, res) => {
    res.render("lore/religion", {
        pageTitle: "Wyrd / Lore / Religion",
        userSession: session
    });
});

router.get("/lore/society", (req, res) => {
    res.render("lore/society", {
        pageTitle: "Wyrd / Lore / Society",
        userSession: session
    });
});

// Magic Pages
router.get("/magic/branches_of_magic", (req, res) => {
    res.render("magic/branches_of_magic", {
        pageTitle: "Wyrd / Magic / Branches of Magic",
        userSession: session
    });
});

router.get("/magic/spellcasting", (req, res) => {
    res.render("magic/spellcasting", {
        pageTitle: "Wyrd / Magic / Spellcasting",
        userSession: session
    });
});

router.get("/magic/alchemy", (req, res) => {
    res.render("magic/alchemy", {
        pageTitle: "Wyrd / Magic / Alchemy",
        userSession: session
    });
});

router.get("/magic/enchantment", (req, res) => {
    res.render("magic/enchantment", {
        pageTitle: "Wyrd / Magic / Enchantment",
        userSession: session
    });
});

router.get("/magic/magical_resistance", (req, res) => {
    res.render("magic/magical_resistance", {
        pageTitle: "Wyrd / Magic / Magical Resistance",
        userSession: session
    });
});

// Character Pages
router.get("/characters/lineage", (req, res) => {
    res.render("characters/lineage", {
        pageTitle: "Wyrd / Characters / Lineage",
        userSession: session
    });
});

router.get("/characters/ability_scores", (req, res) => {
    res.render("characters/ability_scores", {
        pageTitle: "Wyrd / Characters / Ability Scores",
        userSession: session
    });
});

router.get("/characters/skill_paths", (req, res) => {
    res.render("characters/skill_paths", {
        pageTitle: "Wyrd / Characters / Skill Paths",
        userSession: session
    });
});

router.get("/characters/progression", (req, res) => {
    res.render("characters/progression", {
        pageTitle: "Wyrd / Characters / Progression",
        userSession: session
    });
});

export default router;