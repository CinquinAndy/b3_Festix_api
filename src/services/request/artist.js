import Model from "../../models";
import {v4 as uuidv4} from "uuid";

const {User} = Model;

export const findAllArtist = model =>
    model.findAll(
        {
            include: [
                {
                    model: User,
                    as: "Users",
                    required: true,
                    attributes: ["firstName", "lastName", "email"],
                }
            ],
        }
    )

export const findAllArtistByName = (model, artistName) =>
    model.findAll(
        {
            where: {
                artistName: artistName
            },
            include: [
                {
                    model: User,
                    as: "Users",
                    required: true,
                    attributes: ["firstName", "lastName", "email"],
                }
            ],
        }
    )

export const findAllArtistById = (model, id) =>
    model.findByPk(id,
        {
            include: [
                {
                    model: User,
                    as: "Users",
                    required: true,
                    attributes: ["firstName", "lastName", "email"],
                }
            ],
        }
    )

export const findAllArtistByIdUser = (model, id_user) =>
    model.findAll(
        {
            where: {
                id_user: id_user
            },
            include: [
                {
                    model: User,
                    as: "Users",
                    required: true,
                    attributes: ["firstName", "lastName", "email"],
                }
            ],
        }
    )

export const createArtist = (model, payload) =>
    model.create({
            "id": payload.id,
            "artistName": payload.artistName,
            "description": payload.description,
            "musicStyle": payload.musicStyle,
            "photo": payload.photo,
            "id_user": payload.id_user
        }
    )
