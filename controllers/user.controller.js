const { create_customer, get_user_by_email } = require("../models/users.model");

exports.save_user = (req, res, next) => {
  const { email, name, id, address, phone } = req.body;
  const sortedUserData = { email, name, id, address, phone };
  const user_data = Object.values(sortedUserData).map((field) =>
    typeof field === "string" ? field.toLowerCase() : field
  );
  create_customer(user_data)
    .then((response) => {
      console.log(response);
      res
        .status(200)
        .json({ id_user: response.insertId, msg: "SUCCESSFULLY_SAVED" });
    })
    .catch((err) => {
      if (err.code == "ER_DUP_ENTRY") {
        res.statusMessage = "Email already registered";
        res.status(400).send("CUSTOMER_ALREADY_SIGNED");
      } else next(err);
    });
};

exports.getuser = async (req, res, next) => {
  if (!req.query.email) next({ message: "Not found", status: 404 });
  try {
    const user = await get_user_by_email(req.query.email.toLowerCase());
    if (Object.entries(user).length === 0)
      return res.status(400).send("CUSTOMER_NOT_FOUND");
    else return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
