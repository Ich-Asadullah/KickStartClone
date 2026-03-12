const express = require('express');
const router = express.Router();

//create profile
router.post('/create-profile', (req, res) => {
    res.send('Profile created');
});

//update profile
router.put('/update-profile', (req, res) => {
    res.send('Profile updated');
});

//delete profile
router.delete('/delete-profile', (req, res) => {
    res.send('Profile deleted');
});

router.get('/view-profile', (req, res) => {
    res.send('Profile details');
});

router.get('/my-projects', (req, res) => {
    res.send('List of my projects');
});

module.exports = router;