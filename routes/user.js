import express from "express";
// Controllers
import { listUser } from "../controllers/user.js";

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.get("/users", listUser);
router.get("/user", (req, res) => {
  // code body
  res.json({ message: "This is GET User" });
});
router.post("/user", (req, res) => {
  // code body
  res.json({ message: "This is POST User" });
});
router.patch("/user/role/:id", (req, res) => {
  // code body
  // console.log(req.params.id)
  const { id } = req.params;
  console.log(id);

  res.json({ message: "This is PATCH role" });
});
router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is DELETE ${id}` });
});

//Export
export default router;
