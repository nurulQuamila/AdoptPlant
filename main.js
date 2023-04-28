const port = 3000,
express = require("express"),
app = express(),
homeController = require("./controllers/homeController"),
layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");

app.use(layouts);

app.get("/", homeController.sendIndex);

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully");
});

app.get("/shop/:cactus", homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});