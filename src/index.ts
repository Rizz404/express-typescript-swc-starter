import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

// * Middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));

// * Routes

// * Server
app.listen(PORT, async () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

export default app;
