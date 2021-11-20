import catchAsync from "../libs/catchAsync";
import {
    addFestivalService, deleteFestivalService,
    getAllFestivalService, getFestivalFromIdService, getFestivalFromTitleService, updateFestivalService
} from "../services/festivalService";

export const getAllFestival = catchAsync(async (req, res, next) => {
    await getAllFestivalService(req, res, next);
})

export const getFestivalFromId = catchAsync(async (req, res, next) => {
    await getFestivalFromIdService(req, res, next);
})

export const getFestivalFromTitle = catchAsync(async (req, res, next) => {
    await getFestivalFromTitleService(req, res, next);
})
export const addFestival = catchAsync(async (req, res, next) => {
    await addFestivalService(req, res, next);
})
export const updateFestival = catchAsync(async (req, res, next) => {
    await updateFestivalService(req, res, next);
})
export const deleteFestival = catchAsync(async (req, res, next) => {
    await deleteFestivalService(req, res, next);
})
