const sliderHomeController = require('../controller/sliderHomeController')
const modalPromoHomeController = require('../controller/modalPromoHomeController')
const paketController = require('../controller/paketController')
const materiController = require('../controller/materiController')

module.exports = app => {
    app.post('/slider', sliderHomeController.addSlider)
    app.get('/slider/:id', sliderHomeController.detailSlider)
    app.get('/slider', sliderHomeController.listSlider)
    app.put('/slider/:id', sliderHomeController.updateSlider)
    app.delete('/slider/:id', sliderHomeController.deleteSlider)

    app.post('/modal-promo', modalPromoHomeController.addModalPromo)
    app.get('/modal-promo/:id', modalPromoHomeController.detailModalPromo)
    app.get('/modal-promo', modalPromoHomeController.listModalPromo)
    app.put('/modal-promo/:id', modalPromoHomeController.updateModalPromo)
    app.delete('/modal-promo/:id', modalPromoHomeController.deleteModalPromo)

    app.post('/paket', paketController.addPaket)
    app.get('/paket/:id', paketController.detailPaket)
    app.get('/paket', paketController.listPaket)
    app.put('/paket/:id', paketController.uppdatePaket)
    app.delete('/paket/:id', paketController.deletePaket)

    app.post('/materi', materiController.addMateri)
    app.get('/materi/:id', materiController.detailMateri)
    app.get('/materi', materiController.listMateri)
    app.put('/materi/:id', materiController.updateMateri)
    app.delete('/materi/:id', materiController.deleteMateri)
}