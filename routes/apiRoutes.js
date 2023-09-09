const router = require ("express").Router()

// all work in apiRoutes file now 

router.get('/notes', (req, res) => {
    // server side console.log goes to terminal
    console.log("My request was recieved!")
    // create api request to db json to populate the notes 
})


module.exports = router