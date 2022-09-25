const { products, images } = require('../../database/models');
const { Op } = require('sequelize');


const productsApi = {
    all: async(req, res) => {

        try {
            let filters = {};
            let page = 0
            if (req.query.price) {
                filters.price = {
                    [Op.lte]: req.query.price
                }
            }
            if (req.query.page) {
                page = parseInt(req.query.page)
            }
            let productsDB = await products.findAll({
                include: { all: true },
                where: filters,
                limit: 4,
                offset: page,
                // order: [
                //     ['id', 'DESC'],
                //     ['tittle', 'DESC'],
                // ]

            });
            return res.status(200).json({ next: productsDB.lenght > 0 ? page + 2 : null, productsDB })
        } catch (error) {
            return res.status(500).json(error)
        }
    },
}


module.exports = productsApi;