import { Router } from "express";
import { readFile } from "node:fs/promises";

const router = Router();

// Session
import session from "../controllers/session/userSession.js";

// Routes
router.get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Rule routes online" });
});

router.get("/introduction", (req, res) => {
    res.render("rules/introduction", {
        pageTitle: "Wyrd / Rules / Introduction",
        userSession: session
    });
});

router.get("/design_goals", (req, res) => {
    res.render("rules/design_goals", {
        pageTitle: "Wyrd / Rules / Design Goals",
        userSession: session
    });
});

router.get("/dice_mechanics", (req, res) => {
    res.render("rules/dice_mechanics", {
        pageTitle: "Wyrd / Rules / Dice Mechanics",
        userSession: session
    });
});

router.get("/skill_checks", (req, res) => {
    res.render("rules/skill_checks", {
        pageTitle: "Wyrd / Rules / Skill Checks",
        userSession: session
    });
});

// Pregrens
import character from "../controllers/mocks/sample_character.js";
import items from "../controllers/mocks/items.js";
import skills from "../controllers/mocks/skills.js";

router.get("/pregen/sample_character", (req, res) => {
    res.render("samples/sample_character", {
        pageTitle: "Wyrd / Samples / Sample Character",
        userSession: session,
        character: character,
        items: items,
        skills: skills
    });
});

export default router;