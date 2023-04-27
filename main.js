const port = 3000,
express = require("express"),
app = express(),
// http = require("http"),
// httpStatus = require("http-status-codes"),
homeController = require("./controllers/homeController"),
router = require("./router"),
contentTypes = require("./contentTypes"),
utils = require("./utils");

app.get("/", (req, res) => {
    res.send("Hello, this is express!");
})
.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number ${port}`);
});

app.post("/contact", (req, res) => {
    res.send("Contact information submitted successfully");
});

app.get("/shop/:cactus", homeController.sendReqParam);

// router.get("/", (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.htm);
//     utils.getFile("views/index.html", res);
// });
    
// router.get("/shop.html", (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/shop.html", res);
// });

// router.get("/contact.html", (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/contact.html", res);
// });

// router.post("/", (req, res) => {
//     res.writeHead(httpStatus.OK, contentTypes.html);
//     utils.getFile("views/thanks.html", res);
// });

// http.createServer(router.handle).listen(port);
// console.log(`The server is listening on port number: ${port}`);