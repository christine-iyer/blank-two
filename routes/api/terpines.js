const router = require('express').Router()
const terpineCtrl = require('../../controllers/api/terpine')

router.delete('/:id', terpineCtrl.destroyTerpine, terpineCtrl.respondWithTerpine)
router.put('/:id', terpineCtrl.updateTerpine, terpineCtrl.respondWithTerpine)
router.post('/', terpineCtrl.createTerpine, terpineCtrl.respondWithTerpine)
router.get('/:id', terpineCtrl.getTerpines, terpineCtrl.respondWithTerpine)
router.get('/', terpineCtrl.getTerpines, terpineCtrl.respondWithTerpines)

module.exports = router