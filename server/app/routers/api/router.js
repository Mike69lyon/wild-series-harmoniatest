const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

/* Add these *************************************************************** */
const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);
/* ************************************************************************* */

const programsRouter = require("./programs/router");


router.use("/program", programsRouter);

const categoriesRouter = require("./caregories/router");

router.use("/categories", categoriesRouter);




/* ************************************************************************* */

module.exports = router;
