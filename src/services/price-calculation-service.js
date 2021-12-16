const diamondTables = require('../constants');

module.exports = {
    calculatePrice: (params) => {
        const { carat, cut = '', color, clarity } = params;
        const table = diamondTables[cut.toLowerCase()];
        const existingWeights = Object.keys(table);
        const weight = existingWeights.find((item) => carat <= item);

        if (!weight) {
            return null;
        }

        const price = carat * table[weight][color][clarity] * 100;

        return price;
    }
};
