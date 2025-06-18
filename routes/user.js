import express from "express";

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.get("/users", (req, res) => {
  // code body
  res.json({ message: "This is GET Users" });
});
router.get("/user", (req, res) => {
  // code body
  res.json({ message: "This is GET User" });
});
router.post("/user", (req, res) => {
  // code body
  res.json({message: "This is POST User"})
});
router.patch("/user/role/:id", (req, res) => {
  // code body
  res.json ({message: "This is PATCH role"})
})

//Export
export default router;
