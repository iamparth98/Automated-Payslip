import Express from "express";
import authRoute from "./routes/auth.router.js";

const app = Express();

const port = 8800;

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
