const express = require('express');
const router = express.Router();


//create a new backer profile
router.post('/create-profile', (req, res) => {
    res.send('Backer profile created');
});
//update backer profile
router.put('/update-profile', (req, res) => {
    res.send('Backer profile updated');
});
//delete backer profile
router.delete('/delete-profile', (req, res) => {
    res.send('Backer profile deleted');
});



// get list of projects a backer has funded
router.get('/my-funded-projects', (req, res) => {
    res.send('List of projects I have funded');
});


module.exports = router;