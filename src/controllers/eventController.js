import catchAsync from "../libs/catchAsync";
import {
    addEventService, deleteEventService,
    getAllEventService, getEventFromIdService, getEventFromTitleService, updateEventService
} from "../services/eventService";

export const getAllEvent = catchAsync(async (req, res, next) => {
    await getAllEventService(req, res, next);
})

export const getEventFromId = catchAsync(async (req, res, next) => {
    await getEventFromIdService(req, res, next);
})

export const getEventFromTitle = catchAsync(async (req, res, next) => {
    await getEventFromTitleService(req, res, next);
})
export const addEvent = catchAsync(async (req, res, next) => {
    await addEventService(req, res, next);
})
export const updateEvent = catchAsync(async (req, res, next) => {
    await updateEventService(req, res, next);
})
export const deleteEvent = catchAsync(async (req, res, next) => {
    await deleteEventService(req, res, next);
})
