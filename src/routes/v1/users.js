const express = require("express");
const router = express.Router();
const logger = require("../../middleware/logger");

const users = [{ name: "Ahmed" }, { name: "Anas" }];

router.use(logger);

router.get("/", (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.send("User New Form");
});

router.post("/", (req, res) => {
    res.send("Create User");
});

// ":" to create a params
// "router.route()" to chain types/get/post/etc with same route

router
    .route("/:id")
    .get((req, res) => {
        const id = req.params.id;

        console.log(req.user);
        res.send(`Get Users With ID ${id} `);
    })
    .put((req, res) => {
        const id = req.params.id;
        res.send(`Update Users With ID ${id}`);
    })
    .delete((req, res) => {
        const id = req.params.id;
        res.send(`Delete Users With ID ${id}`);
    });

// Middleware

// "router.param("x")" this runs the code
// whenever it finds matching params i.e "x"

router.param("id", (req, res, next, id) => {
    // req.x "x" is the variable name
    req.user = users[id];

    next();
});

module.exports = router;
