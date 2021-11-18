import {Router} from "express";
import authRoute from "./authRoute";
import userRoute from "./userRoute";
import artistRoute from "./artistRoute";

const apiRouter = Router();

apiRouter.use("/auth", authRoute);
apiRouter.use("/user", userRoute);
apiRouter.use("/artist", artistRoute);

export default apiRouter;
