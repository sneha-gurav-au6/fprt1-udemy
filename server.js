const express = require("express");
const app = express();

require("./db");
const PORT = process.env.PORT||5000

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

if(process.env.NODE_ENV==="production"){
    app.use(express.static('client/build'))
}

app.use(user);
app.use(admin);
app.listen(PORT, () => console.log("server started"));
