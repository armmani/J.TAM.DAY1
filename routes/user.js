import express from "express";

const router = express.Router()

router.get('/', (req, res)=>{
  //code body
  res.json({message: "This is GET Users"})
})

//Export
export default router
