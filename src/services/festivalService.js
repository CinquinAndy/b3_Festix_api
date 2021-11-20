import _ from "lodash";
import catchAsync from "../libs/catchAsync";
import Model from "../models";
import {
    createFestival,
    findAllFestival,
    findFestivalById,
    findFestivalByTitle
} from "./request/festival";
import {v4 as uuidv4} from "uuid";

const {Festival} = Model;

export const getAllFestivalService = catchAsync(async (req, res, next) => {
    const festivals = await findAllFestival(Festival)

    const body = festivals.map(festival => _.omit(festival.toJSON(), []));

    return res.status(200).json({
        status: "success",
        payload: body
    });
})

export const getFestivalFromIdService = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const festival = await findFestivalById(Festival, id);

    return res.status(200).json({
        status: "success",
        payload: festival
    });
})

export const getFestivalFromTitleService = catchAsync(async (req, res, next) => {
    const title = req.params.title;
    const festival = await findFestivalByTitle(Festival, title);

    return res.status(200).json({
        status: "success",
        payload: festival
    });
})


export const addFestivalService = catchAsync(async (req, res, next) => {
    const created = await createFestival(Festival, {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo,
        date: req.body.date,
    });
    if (!created) {
        return res.status(400).json({
            status: "fail",
            message: "error on creating festival",
        });
    } else {
        return res.status(201).json({
            status: "success",
            message: "Festival successfully created",
            payload: _.omit(JSON.parse(JSON.stringify(created)), [])
        });
    }
})

export const updateFestivalService = catchAsync(async (req, res, next) => {
    const id_festival = req.params.id;
    const festival = await findFestivalById(Festival, id_festival);

    festival.title = req.body.title ?? festival.title;
    festival.description = req.body.description ?? festival.description;
    festival.photo = req.body.photo ?? festival.photo;
    festival.date = req.body.date ?? festival.date;

    festival.save();

    return res.status(200).json({
        status: "success",
        payload: festival
    });
})
export const deleteFestivalService = catchAsync(async (req, res, next) => {
    const id_festival = req.params.id;
    const festival = await findFestivalById(Festival, id_festival);

    festival.destroy();

    return res.status(200).json({
        status: "success",
        message: "deleted !"
    });
})
