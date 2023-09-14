const router = require ("express").Router()
// do i need const notes? 
const notes = require ('../db/db.json')

// all work in apiRoutes file now 

router.get('/notes', (req, res) => {
    // server side console.log goes to terminal
    console.log("My request was recieved!")
    app.get('/')
    // create api request to db json to populate the notes
})


module.exports = router