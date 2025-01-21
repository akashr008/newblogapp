const express = require('express');
const router = express.Router();
router.use(express.json());
const userModel=require('../models/User')
const jwt=require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const user=await userModel.findOne({email:req.body.email})
 if(!user){
  res.status(404).send({message:'user not found'});
 }
 try {
    if (user.password==req.body.password) {
      const payload={email:user.email,password:user.password};
      const token=jwt.sign(payload,'okbye');
    res.status(200).send({message:'login success',token:token})
    }
    else{
      res.status(400).send({message:'invalid'})
    }
  }catch(error){
      console.log(error);
    }
  })

module.exports = router;
