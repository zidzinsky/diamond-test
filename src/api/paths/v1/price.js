module.exports = function () {
    const operations = {};

    operations.post = async (req, res) => {};

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
