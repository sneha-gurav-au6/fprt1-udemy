const express = require("express");
const app = express();

require("./db");
const port = 5000;

const user = require("./Routes/userRoutes");
const admin = require("./Routes/AdminRoutes");
app.get("/", (req, res) => {
    res.send("Hello");
});
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(user);
app.use(admin);
app.listen(port, () => console.log("server started"));
