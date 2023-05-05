const Joi = require("joi");

const postUser = {
  payload: Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().min(3).max(50).required(),
    cpf: Joi.string().min(11).max(11).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(11).required(),
    password: Joi.string().min(6).max(50).required(),

    address: Joi.object({
      street: Joi.string().required(),
      number: Joi.number().integer().required(),
      complement: Joi.string().required(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
    }).required(),
    state: Joi.string().required(),
    zipcode: Joi.string().min(8).max(8).required(),
  }).required(),
};

const getUser = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const putUser = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const deleteUser = {
    params: Joi.object({
        id: Joi.number().integer().required(),
    }),
}
const getAllUser = {
    query: Joi.object({
        page: Joi.number().integer().required(),
        limit: Joi.number().integer().required(),
    }),
}

module.exports = { postConsumer: postUser, getConsumer: getUser, putConsumer: putUser, deleteConsumer: deleteUser, getAllConsumer: getAllUser };
