import Model from "../../models";
import {v4 as uuidv4} from "uuid";

const {User} = Model;
const {Artist} = Model;
const {Festival} = Model;

export const findAllFestival = model =>
    model.findAll()

export const findFestivalById = (model, id) =>
    model.findByPk(id)

export const findFestivalByTitle = (model, title) =>
    model.findAll(
        {
            where: {
                title: title
            },
        }
    )

export const createFestival = (model, payload) =>
    model.create({
            "id": payload.id,
            "title": payload.title,
            "description": payload.description,
            "photo": payload.photo,
            "date": payload.hour,
        }
    )
