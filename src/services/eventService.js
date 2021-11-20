import _ from "lodash";
import catchAsync from "../libs/catchAsync";
import Model from "../models";
import {
    addArtistToEvent,
    createEvent,
    findAllEvent, findByBoth,
    findEventById,
    findEventByTitle
} from "./request/event";
import {v4 as uuidv4} from "uuid";
import {next} from "lodash/seq";
import {findArtistById} from "./request/artist";

const {Event} = Model;
const {Artist} = Model;
const {Artist_event} = Model;

export const getAllEventService = catchAsync(async (req, res, next) => {
    const events = await findAllEvent(Event)

    const body = events.map(event => _.omit(event.toJSON(), []));

    return res.status(200).json({
        status: "success",
        payload: body
    });
})

export const getEventFromIdService = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const event = await findEventById(Event, id);

    return res.status(200).json({
        status: "success",
        payload: event
    });
})

export const getEventFromTitleService = catchAsync(async (req, res, next) => {
    const title = req.params.title;
    const event = await findEventByTitle(Event, title);

    return res.status(200).json({
        status: "success",
        payload: event
    });
})


export const addEventService = catchAsync(async (req, res, next) => {
    const created = await createEvent(Event, {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo,
        hour: req.body.hour,
        id_festival: req.body.id_festival
    });
    if (!created) {
        return res.status(400).json({
            status: "fail",
            message: "error on creating event",
        });
    } else {
        return res.status(201).json({
            status: "success",
            message: "Event successfully created",
            payload: _.omit(JSON.parse(JSON.stringify(created)), [])
        });
    }
})

export const getLinkArtistEventService = catchAsync(async (req, res, next) => {
    const id_artist = Number(req.body.id_artist);
    const id_event = req.body.id_event;

    const artist = await findArtistById(Artist,id_artist);
    if (_.isEmpty(artist)) {
        return res.status(400).json({
            status: "error",
            message: "the artist does not exist"
        });
    }
    const event = await findEventById(Event,id_event);
    if (_.isEmpty(event)) {
        return res.status(400).json({
            status: "error",
            message: "the event does not exist"
        });
    }

    const artist_events = await findByBoth(Artist_event,
        {
            "id_artist": id_artist,
            "id_event": id_event
        })

    return res.status(200).json({
        status: "error",
        payload: artist_events
    });
})

export const linkArtistEventService = catchAsync(async (req, res, next)=>{
    const id_artist = Number(req.body.id_artist);
    const id_event = req.body.id_event;

    const artist = await findArtistById(Artist,id_artist);
    if (_.isEmpty(artist)) {
        return res.status(400).json({
            status: "error",
            message: "the artist does not exist"
        });
    }

    const event = await findEventById(Event,id_event);
    if (_.isEmpty(event)) {
        return res.status(400).json({
            status: "error",
            message: "the event does not exist"
        });
    }

    const artist_events = await findByBoth(Artist_event,
        {
            "id_artist": id_artist,
            "id_event": id_event
        })

    if (_.isEmpty(artist_events)) {
        const artist_event_linked = await addArtistToEvent(Artist_event,
            {
                "id_artist": id_artist,
                "id_event": id_event
            })

        return res.status(200).json({
            status: "success",
            payload: artist_event_linked
        });
    }

    return res.status(400).json({
        status: "error",
        message: "the combination of both key already exists"
    });
})

export const updateEventService = catchAsync(async (req, res, next) => {
    const id_event = req.params.id;
    const event = await findEventById(Event, id_event);

    event.title = req.body.title ?? event.title;
    event.description = req.body.description ?? event.description;
    event.photo = req.body.photo ?? event.photo;
    event.hour = req.body.hour ?? event.hour;
    event.id_festival = req.body.id_festival ?? event.id_festival;

    event.save();

    return res.status(200).json({
        status: "success",
        payload: event
    });
})

export const deleteEventService = catchAsync(async (req, res, next) => {
    const id_event = req.params.id;
    const event = await findEventById(Event, id_event);

    event.destroy();

    return res.status(200).json({
        status: "success",
        message: "deleted !"
    });
})
