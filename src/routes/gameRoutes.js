import { Router } from "express";
import { readFile } from "node:fs/promises";

const router = Router();

// Routes
router.get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Game routes online" });
});

router.get("/introduction", (req, res) => {
    res.render("intro", {
        pageTitle: "Wyrd / Intro"
    });
});

router.get("/armor", async (req, res) => {
    console.log("Hit armor route");

    let armor;

    try {
        armor = JSON.parse(
            await readFile("./src/controllers/database/armor.json", "utf8")
        );
    } catch (error) {
        console.error(error);
    }

    res.render("armor", {
        pageTitle: "Wyrd - Armor",
        armor
    });
});

export default router;