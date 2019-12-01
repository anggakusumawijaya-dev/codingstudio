const sliderHomeController = require('../controller/sliderHomeController')
const modalPromoHomeController = require('../controller/modalPromoHomeController')

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
}