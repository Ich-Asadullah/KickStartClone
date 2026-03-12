const express = require('express');
const router = express.Router();


// Create a new project
router.post('/create', (req, res) => {
    
    res.send('Project created');
});
// Update an existing project
router.put('/update/:id', (req, res) => {
    
    res.send(`Project with ID ${req.params.id} updated`);
});

// Delete a project
router.delete('/delete/:id', (req, res) => {
    
    res.send(`Project with ID ${req.params.id} deleted`);
});

//set funding goal for a project
router.post('/set-funding-goal/:id', (req, res) => {
    
    res.send(`Funding goal set for project with ID ${req.params.id}`);
});

//set funding duration for a project
router.post('/set-funding-duration/:id', (req, res) => {
    res.send(`Funding duration set for project with ID ${req.params.id}`);
});

//get all projects of an entrepreneur
router.get('/my-projects', (req, res) => {
    res.send('List of my projects');
});

//get details of a specific project
router.get('/project/:id', (req, res) => {
    res.send(`Details of project with ID ${req.params.id}`);
});







//Routes for Backers

//give funding to a project
router.post('/fund/:id', (req, res) => {
    res.send(`Funding given to project with ID ${req.params.id}`);
});

//cancel funding for a project
router.post('/cancel-funding/:id', (req, res) => {
    res.send(`Funding cancelled for project with ID ${req.params.id}`);
});

module.exports = router;