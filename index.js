require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const Blog = require("./models/blog")

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog")
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL).then(e => {
      console.log("MongoDB is connected...");
});

app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.resolve("./public/images")));
app.use(express.static(path.resolve("./public")));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", async (req, res) => {
      const blogList = await Blog.find({});
      res.render("home", {
            user: req.user,
            blogs: blogList
      });
})

app.use("/user", userRoute);

app.use("/blog", blogRoute);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));