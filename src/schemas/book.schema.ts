import Joi from "joi";

export const newBookSchema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
    rating: Joi.number().integer().min(0).max(5).required(),
  });