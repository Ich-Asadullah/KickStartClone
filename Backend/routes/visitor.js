const express = require('express');
const router = express.Router();

//create a new visitor profile
router.post('/create-profile', (req, res) => {
    res.send('Visitor profile created');
});
//update visitor profile
router.put('/update-profile', (req, res) => {
    res.send('Visitor profile updated');
});
//delete visitor profile
router.delete('/delete-profile', (req, res) => {
    res.send('Visitor profile deleted');
});

//get list of projects a visitor has viewed
router.get('/my-viewed-projects', (req, res) => {
    res.send('List of projects I have viewed');
});

module.exports = router;