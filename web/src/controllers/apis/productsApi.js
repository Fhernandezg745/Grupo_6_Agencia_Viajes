const { products, images } = require('../../database/models');
const Sequelize = require('sequelize');


const productsApi = {
    all: async(req, res) => {

        try {
            let page = 0;
            
            if (req.query.page) {
                page = parseInt(req.query.page);
            }

            let productsDB = await products.findAll({
                include: { all: true },
                limit: 5,
                offset: page,
                order: [['id', 'ASC']]
            });

            let data = {};
            data.productsTotal = await products.count();
            data.regions = {};
            data.categories = {};
            let regionsT = productsDB.map(el => el.productoRegion.region);
            
            function noDuplicates(arr) {
                let uniques = arr.reduce((acc, curr) => {
                    if(!acc.includes(curr)){
                        acc.push(curr);
                    }
                    return acc;
                }, []);
                return uniques;
            }
            
            let regions = noDuplicates(regionsT);
            regions.forEach(el => {
                    let propName = el.split(" ").join('').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    data.regions[propName + 'Total'] = productsDB.filter((product, index, arr) => {
                        return product.productoRegion.region === el;
                    }).length;
                });    
            
            let categoriesT = productsDB.map(product => product.category);
            let categories = noDuplicates(categoriesT);
            categories.forEach( el => {
                    let propName = el.split(" ").join('').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    data.categories[propName + 'Total'] = productsDB.filter((product, index, arr) => {
                        return product.category === el;
                    }).length;
            });          

            data.products = productsDB.map(product => Object({
                id: product.id,
                tittle : product.tittle,
                url : 'http://localhost:3002/products/details/' + product.id,
                image: 'http://localhost:3002/products/' + product.images[0].images,
                shortDescription : product.shortDescription,
                longDescription : product.longDescription,
                category: product.category,
                days: product.days,
                nights: product.nights,
                stars: product.stars,
                base: product.base,
                region: product.productoRegion.region,
                price: product.salesPrice
            }));
            return res.status(200).json({ next: data.products.length> 0 ? 'http://localhost:3002/api/products?page=' + (page + 10) : null, data });
            // return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    oneProduct: async(req, res) => {
        try {
            let search = await products.findByPk(req.params.id, {
                include: { all: true }
            });
            let data = {};
            data.id = search.id;
            data.tittle  = search.tittle;
            data.url  = 'http://localhost:3002/products/details/' + search.id;
            data.image = 'http://localhost:3002/products/' + search.images[0].images;
            data.shortDescription  = search.shortDescription;
            data.longDescription  = search.longDescription;
            data.category = search.category;
            data.days = search.days;
            data.nights = search.nights;
            data.stars = search.stars;
            data.base = search.base;
            data.region = search.productoRegion.region;
            data.price = search.salesPrice;

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}


module.exports = productsApi;