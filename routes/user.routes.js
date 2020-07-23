const express = require("express");
const router = express.Router();

const { save_user, getuser } = require("../controllers/user.controller");
const { validate } = require("../validations/validation");
const { user_schema } = require("../validations/validationSchemas");

router.route("/").get(getuser);
router.route("/save").post(validate(user_schema), save_user);

module.exports = router;
