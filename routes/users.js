import express from 'express'

let router = express.Router()

router.get('/usertest', (req, res) => {
    res.send('User test is successful!')
})

router.post('/userposttest', (req, res) => {
    const username = req.body.username
    res.send(`Your username is: ${username}`)
})

export default router