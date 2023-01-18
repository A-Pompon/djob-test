import * as Joi from 'joi'

export const TaskSchema = Joi.object({
    task_id: Joi.string().required(),
    first_date_of_execution: Joi.date().required(),
    repeat: Joi.number().required(),
}).options({
    abortEarly: false,
});