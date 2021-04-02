const { Router } = require('express');
const User = require('../models/User');
const Role = require('../models/Role');

const router = Router();

router.get('/users', async(req,res) => {
  try {
      const user = await User.findAll();
      return res.status(200).json({user});
  }catch(err){
      return res.status(500).json({err});
  }
});

router.get('/roles', async(req,res) => {
  try {
      const role = await Role.findAll();
      return res.status(200).json({role});
  }catch(err){
      return res.status(500).json({err});
  }
});

module.exports = router;
