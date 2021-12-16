const apiDoc = {
    swagger: '2.0',
    basePath: '/',
    info: {
        title: 'Diamond Calculator API.',
        version: '1.0.0'
    },
    definitions: {
        DiamondSchema: {
            type: 'object',
            properties: {
                carat: {
                    type: 'number'
                },
                cut: {
                    type: 'string'
                },
                color: {
                    type: 'string'
                },
                clarity: {
                    type: 'string'
                }
            },
            required: ['carat', 'cut', 'color', 'clarity']
        },
        SuccessPriceCalculation: {
            type: 'object',
            properties: {
                success: {
                    type: 'boolean'
                },
                value: {
                    type: 'number'
                }
            }
        }
    },
    paths: {}
};

module.exports = apiDoc;
