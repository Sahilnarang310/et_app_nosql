// const express = require('express');
// const {forgotPassword,resetpassword, updatepassword} = require('../controller/passoword')
// const router = express.Router(); 


// router.route('/forgotpassword').post(forgotPassword);
// router.route('/resetpassword/:id').get(resetpassword)
// router.route('/updatepassword/:id').get(updatepassword)


// module.exports = router;  

const express = require('express');
const { forgotPassword, resetpassword, updatepassword } = require('../controller/passoword');
const mongoose = require('mongoose'); // Import mongoose module

const router = express.Router();

// Define the 'forgotPassword' route with a POST request and a callback function
router.route('/forgotpassword').post(forgotPassword);

// Define the 'resetpassword' route with a GET request and a callback function
router.route('/resetpassword/:id').get(async (req, res, next) => {
  const { id } = req.params;

  try {
    // Convert the id string to ObjectId
    const userId = mongoose.Types.ObjectId(id);

    // Call the resetpassword middleware with the userId in ObjectId format
    await resetpassword(req, res, next, userId);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Define the 'updatepassword' route with a GET request and a callback function
router.route('/updatepassword/:id').get(updatepassword);

module.exports = router;
