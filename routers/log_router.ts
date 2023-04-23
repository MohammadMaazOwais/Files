import * as express from "express";
import LogSchema from "../models/logs";

const logRouter = express.Router();

logRouter.post("/", async (req, res) => {
  try {
    const resp = await LogSchema.findOne({
      user_android_id: req.body.user_android_id,
    });

    if (resp) {
      resp.user_logs.push(req.body.user_logs);
      resp.save();
      res.status(200).json({ message: "Log updated" });
    } else {
      const resp = await LogSchema.create(req.body);
      res.status(200).json({ message: "Log created" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default logRouter;
