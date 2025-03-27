import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Routers
import adminRouter from "./routes/admin.routes.js";
import projectRouter from "./routes/project.routes.js";
import messageRouter from "./routes/message.routes.js";
import bookReviewRouter from "./routes/bookReview.routes.js";

dotenv.config();
// console.log(process.env.MONGODB_URI);

// Connect to MongoDB
// https://mongoosejs.com/docs/guide.html#indexes
await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error(e));

const PORT = process.env.PORT;

const app = express();

// View Engine
app.set("views", "./views");
app.set("view engine", "pug");

// Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// API Routes
app.use("/api/admin", adminRouter);
app.use("/api/project", projectRouter);
app.use("/api/book", bookReviewRouter);
app.use("/api/message", messageRouter);

// Global error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
