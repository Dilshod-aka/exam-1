const { Router } = require("express");

const router = Router();

const { Soliha_USER, GET_USER } = require("../controllers/register");

router.post("/post", Soliha_USER);
router.get("/get", GET_USER);

module.exports = router;
