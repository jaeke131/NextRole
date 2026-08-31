import cors from "cors";
import express from "express";
import applicationRoutes from "./routes/applicationRoute.js";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://127.0.0.1:5173",
  })
);
app.use(express.json());

app.use("/api/applications", applicationRoutes);
app.use("/api/users", userRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    ok: true,
    service: "nextrole-api",
  });
});

export default app;
