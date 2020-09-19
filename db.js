//mongodb connection

const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://snehagurav:sneha@fprt1.siuxw.mongodb.net/fprt-backend?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
    .then(function () {
        console.log("Mongodb connected");
    })
    .catch(function (err) {
        console.log(err.message);
    });
