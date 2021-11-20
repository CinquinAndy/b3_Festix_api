import {Router} from "express";
import authRoute from "./authRoute";
import userRoute from "./userRoute";
import artistRoute from "./artistRoute";
import eventRoute from "./eventRoute";
import festivalRoute from "./festivalRoute";

const apiRouter = Router();

apiRouter.use("/auth", authRoute);
apiRouter.use("/user", userRoute);
apiRouter.use("/artist", artistRoute);
apiRouter.use("/event", eventRoute);
apiRouter.use("/festival", festivalRoute);

export default apiRouter;
