import express from "express";
const app = express();
import cors from "cors"
import cookieParser from "cookie-parser";

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser());


// Import route.
import userRouter from "./routes/user.route.js"

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello"
    })
});


// Route declearation.
app.use("/api/v1/users", userRouter)


export { app }