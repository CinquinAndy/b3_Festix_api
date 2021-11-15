import catchAsync from "../libs/catchAsync";
import {
    addArtistService, deleteArtistService,
    getAllArtistService,
    getArtistFromIdArtistService,
    getArtistFromIdUserService,
    getArtistFromNameService, updateArtistService
} from "../services/artistService";

export const getAllArtist = catchAsync(async (req, res, next) => {
    await getAllArtistService(req, res, next);
})

export const getArtistFromName = catchAsync(async (req, res, next) => {
    await getArtistFromNameService(req, res, next);
})

export const getArtistFromIdArtist = catchAsync(async (req, res, next) => {
    await getArtistFromIdArtistService(req, res, next);
})

export const getArtistFromIdUser = catchAsync(async (req, res, next) => {
    await getArtistFromIdUserService(req, res, next);
})
export const addArtist = catchAsync(async (req, res, next) => {
    await addArtistService(req, res, next);
})
export const updateArtist = catchAsync(async (req, res, next) => {
    await updateArtistService(req, res, next);
})
export const deleteArtist = catchAsync(async (req, res, next) => {
    await deleteArtistService(req, res, next);
})
