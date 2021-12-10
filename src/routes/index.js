const router = require("express").Router();
const authRoutes = require("./auth")
const userRoutes = require("./user")

router.get('/', (req, res)=> {
    res.json({message: 'connected'})
})
router.use('/auth', authRoutes)
router.use('/users', userRoutes)

module.exports = router;