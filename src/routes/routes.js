import { Router } from "express";

const router = Router();

// Routes
router.get("/", (req, res) => {
    res.status(200).json({ status: 200, message: "Game routes online" });
});

export default router;