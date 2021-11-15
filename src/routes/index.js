import {Router} from "express";
import authRoute from "./authRoute";
import userRoute from "./userRoute";

const apiRouter = Router();

apiRouter.use("/auth", authRoute);
apiRouter.use("/user", userRoute);
apiRouter.use("/artist", userRoute);

export default apiRouter;
