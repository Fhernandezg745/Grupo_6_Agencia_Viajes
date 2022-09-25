const axios = require('../../modules/reqAxios');


module.exports = {
    countries: async(req, res) => {
        try {
            let data = await axios("https://restcountries.com/v3.1/region/ame")
            return res.send(data.data)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}