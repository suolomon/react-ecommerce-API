import express from "express";
import { verifyTokenAndAuthorization } from "./verifyToken.js";
import User from '../models/User.js'

const router = express.Router();

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
 if(req.body.password) {
     req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
     }
 try {
     const updatedUser = await User.findByIdAndUpdate(req.params.id, {
         $set: req.body
     }, {new:true})
     res.status(200).json(updatedUser)
 } catch(err){
  res.status(500).json(err)
 }
});

//delete 

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})

export default router;
