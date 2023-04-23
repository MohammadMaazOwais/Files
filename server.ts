import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";
import logRouter from "./routers/log_router";

mongoose
  .connect("mongodb+srv://24100185:QL5IXKR4YRIw8yLu@cluster0.g3mhmke.mongodb.net/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
const app = express();
app.use(cors());
app.use(express.json());

app.use("/log", logRouter);

const server = app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
