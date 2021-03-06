import GlobalError from "../libs/globalError";
import {jwtVerifyToken, refreshToken} from "../libs/generateToken";
import {isPasswordChanged} from "../libs/passwordOp";
import catchAsync from "../libs/catchAsync";
import Model from "../models";
import {findByPk} from "../services/request/generic";
import {createCookie} from "../libs/createCookie";

const {User} = Model;

export const jwtProtect = catchAsync(async (req, res, next) => {
    const token = req.cookies.__act;

    if (!token) {
        return next(new GlobalError("You are not logged in", 401));
    }

    try {
        const decoded = await jwtVerifyToken(token);

        if (decoded.blocked) {
            return next(
                new GlobalError(
                    "Your account has been blocked, contact system administrator ",
                    401
                )
            );
        }

        const freshUser = await findByPk(User, decoded.id);
        if (!freshUser) {
            return next(new GlobalError("user from does not exist", 401));
        }
        const passwordChangeAt = Math.round(
            new Date(`${freshUser.toJSON().changedPassword}`).getTime() / 1000
        );

        if (isPasswordChanged(decoded.iat, passwordChangeAt)) {
            return next(
                new GlobalError(
                    "You are not logged in, please login with correct details",
                    401
                )
            );
        }
        req.user = freshUser.toJSON();

        next();
    } catch (err) {
        console.log(err.stack);
        const {__rt} = req.cookies;

        const {accessToken, newRefreshToken} = await refreshToken(__rt, next);

        if (accessToken && newRefreshToken) {
            createCookie(
                res,
                accessToken,
                "__act",
                process.env.ACCESS_TOKEN_COOKIE_EXPIRES
            );
            createCookie(
                res,
                newRefreshToken,
                "__rt",
                process.env.REFRESH_TOKEN_COOKIE_EXPIRES
            );

            next();
        }
    }
});
