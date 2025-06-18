import express from "express";

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.post("/register");
router.post("/login");

//Export
export default router;
