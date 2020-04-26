const express = require("express")
const router = express.Router();
const User = require("../models/user")


router.post("/users", (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports = router
