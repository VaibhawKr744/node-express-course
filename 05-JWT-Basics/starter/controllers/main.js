const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const { username, password } = req.body
    console.log(username, password)

    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400)
    }
    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_Secret, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })

 
    console.log(token)

}

module.exports = {
    login, dashboard
}