import _ from "lodash";
import catchAsync from "../libs/catchAsync";
import Model from "../models";
import {
    createArtist,
    findAllArtist,
    findAllArtistById,
    findAllArtistByIdUser,
    findAllArtistByName
} from "./request/artist";
import {hashPassword} from "../libs/passwordOp";
import {createUser, findUser} from "./request/user";
import {v4 as uuidv4} from "uuid";

const {Artist} = Model;

export const getAllArtistService = catchAsync(async (req, res, next) => {
    const artists = await findAllArtist(Artist)

    const body = artists.map(artist => _.omit(artist.toJSON(), []));

    return res.status(200).json({
        status: "success",
        payload: body
    });
})
export const getArtistFromNameService = catchAsync(async (req, res, next) => {
    const artistName = req.params.artistName;
    const artist = await findAllArtistByName(Artist, artistName);

    return res.status(200).json({
        status: "success",
        payload: artist
    });
})
export const getArtistFromIdArtistService = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const artist = await findAllArtistById(Artist, id);

    return res.status(200).json({
        status: "success",
        payload: artist
    });
})
export const getArtistFromIdUserService = catchAsync(async (req, res, next) => {
    const id_user = req.params.id_user;
    const artist = await findAllArtistByIdUser(Artist, id_user);

    return res.status(200).json({
        status: "success",
        payload: artist
    });
})

export const addArtistService = catchAsync(async (req, res, next) => {
    const artistName = req.body.artistName;
    const description = req.body.description;
    const musicStyle = req.body.musicStyle;
    const photo = req.body.photo;
    const id_user = req.body.id_user;

    const artistFinded = await findAllArtistByIdUser(Artist, id_user)

    if (!artistFinded) {
        const created = await createArtist(Artist, {
            id: uuidv4(),
            artistName: req.body.artistName,
            description: req.body.description,
            musicStyle: req.body.musicStyle,
            photo: req.body.photo,
            id_user: req.body.id_user
        });
        if (!created) {
            return res.status(400).json({
                status: "fail",
                message: "error on creating artist",
            });
        } else {
            return res.status(201).json({
                status: "success",
                message: "Artist successfully created",
                payload: _.omit(JSON.parse(JSON.stringify(created)), [])
            });
        }
    }

    return res.status(400).json({
        status: "fail",
        message: "Artist already exist"
    });
})

export const updateArtistService = catchAsync(async (req, res, next) => {

})
export const deleteArtistService = catchAsync(async (req, res, next) => {

})
