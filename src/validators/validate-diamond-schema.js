const Joi = require('joi');

const schema = Joi.object({
    carat: Joi.number().required(),
    cut: Joi.string().required().valid('Heart', 'Round', 'Square', 'Triangle', 'Oval'),
    color: Joi.string().required().valid('D', 'E', 'F', 'G', 'H', 'I', 'J'),
    clarity: Joi.string().required().valid('IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2')
});

const validate = (params) => schema.validate({ ...params });

module.exports = validate;
