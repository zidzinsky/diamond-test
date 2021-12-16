const priceCalculationService = require('../../../services/price-calculation-service');

module.exports = function () {
    const operations = {};

    operations.post = (req, res, next) => {
        try {
            const { body = {} } = req;

            const price = priceCalculationService.calculatePrice(body);

            if (!price) {
                res.status(404).json({
                    sucess: false,
                    msg: 'Can not find price for such diamond.'
                });
                return;
            }

            const response = {
                sucess: true,
                value: price,
                currency: '$'
            };

            res.status(200).json(response);
        } catch (e) {
            next(e);
        }
    };

    operations.post.apiDoc = {
        summary: 'Calculate price of diamond',
        operationId: 'calculatePrice',
        consumes: ['application/json'],
        parameters: [
            {
                in: 'body',
                name: 'Diamond',
                schema: {
                    $ref: '#/definitions/DiamondSchema'
                }
            }
        ],
        responses: {
            200: {
                description: 'Success response',
                schema: {
                    $ref: '#/definitions/SuccessPriceCalculation'
                }
            }
        }
    };

    return operations;
};
