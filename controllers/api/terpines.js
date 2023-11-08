require('dotenv').config()
const Terpine = require('../../models/terpine')

const destroyTerpine = async (req, res, next) => {
    try {
        const deletedTerpine = await Terpine.findByIdAndDelete(req.params.id)
        res.locals.data.terpine = deletedTerpine
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const updateTerpine = async (req, res, next) => {
    try {
        const updatedTerpine = await Terpine.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.terpine = updatedTerpine
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const createTerpine = async (req, res, next) => {
    try {
        const createdTerpine = await Terpine.create(req.body)

        res.locals.data.terpine = createdTerpine
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const getTerpines= async (req, res, next) => {
    try {
        
        const terpines = await Terpine.find(req.body)
        res.locals.data.terpines = terpines 
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const respondWithTerpines = (req, res) => {
    res.json(res.locals.data.terpines)
}
const respondWithTerpine = (req, res) => {
    res.json(res.locals.data.terpine)
}



module.exports = {
    destroyTerpine,
    updateTerpine,
    createTerpine,
    getTerpines,
    respondWithTerpine, 
    respondWithTerpines
}