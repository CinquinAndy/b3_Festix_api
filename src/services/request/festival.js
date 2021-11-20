import Model from "../../models";
import {v4 as uuidv4} from "uuid";

const {User} = Model;
const {Artist} = Model;
const {Festival} = Model;

export const findAllFestival = model =>
    model.findAll(
        {
            // include: [
            //     {
            //         model: Artist,
            //         as: "Artists",
            //         required: true
            //     },
            //     {
            //         model: Festival,
            //         as: "Festivals",
            //         required: true
            //     },
            // ],
        }
    )

export const findFestivalById = (model, id) =>
    model.findByPk(id,
        {
            // include: [
            //     {
            //         model: User,
            //         as: "Users",
            //         required: true,
            //         attributes: ["firstName", "lastName", "email"],
            //     }
            // ],
        }
    )

export const findFestivalByTitle = (model, title) =>
    model.findAll(
        {
            where: {
                title: title
            },
            // include: [
            //     {
            //         model: User,
            //         as: "Users",
            //         required: true,
            //         attributes: ["firstName", "lastName", "email"],
            //     }
            // ],
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
