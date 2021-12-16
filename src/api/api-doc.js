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
                    type: 'string',
                    enum: ['Heart', 'Round', 'Square', 'Triangle', 'Oval']
                },
                color: {
                    type: 'string',
                    enum: ['D', 'E', 'F', 'G', 'H', 'I', 'J']
                },
                clarity: {
                    type: 'string',
                    enum: ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2']
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
                },
                currency: {
                    type: 'string'
                }
            }
        }
    },
    paths: {}
};

module.exports = apiDoc;
