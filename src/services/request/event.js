import Model from "../../models";
import {v4 as uuidv4} from "uuid";
import {Op} from "sequelize";

const {User} = Model;
const {Artist} = Model;
const {Festival} = Model;

export const findAllEvent = model =>
    model.findAll(
        {
            include: [
                {
                    model: Artist,
                    as: "Artists",
                    include: [
                        {
                            model: User,
                            as: "Users",
                            attributes: ["firstName", "lastName", "email"],
                        }
                    ],
                },
                {
                    model: Festival,
                    as: "Festivals",
                    required: true
                },
            ],
        }
    )

export const findEventById = (model, id) =>
    model.findByPk(id,
        {
            include: [
                {
                    model: Artist,
                    as: "Artists",
                    include: [
                        {
                            model: User,
                            as: "Users",
                            attributes: ["firstName", "lastName", "email"],
                        }
                    ],
                },
                {
                    model: Festival,
                    as: "Festivals",
                    required: true
                },
            ],
        }
    )

export const findEventByTitle = (model, title) =>
    model.findAll(
        {
            where: {
                title: title
            },
            include: [
                {
                    model: Artist,
                    as: "Artists",
                    include: [
                        {
                            model: User,
                            as: "Users",
                            attributes: ["firstName", "lastName", "email"],
                        }
                    ],
                },
                {
                    model: Festival,
                    as: "Festivals",
                    required: true
                },
            ],
        }
    )

export const createEvent = (model, payload) =>
    model.create({
            "id": payload.id,
            "title": payload.title,
            "description": payload.description,
            "photo": payload.photo,
            "hour": payload.hour,
            "id_festival": payload.id_festival
        }
    )

export const addArtistToEvent = (model, payload) =>
    model.create({
        "id_artist": payload.id_artist,
        "id_event": payload.id_event
    })

export const findByBoth = (model, payload) =>
    model.findOne({
            where: {
                [Op.and]: [
                    {id_artist: payload.id_artist},
                    {id_event: payload.id_event}
                ]
            },
        }
    )
