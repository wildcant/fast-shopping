const { create_customer, get_user_by_email } = require("../models/users.model");

exports.save_user = (req, res, next) => {
  user_data = {};
  for (const field of Object.keys(req.body)) {
    user_data[field] = req.body[field].toLowerCase();
  }
  create_customer(user_data)
    .then(() => {
      res.status(200).json({ msg: "SUCCESSFULLY_SAVED" });
    })
    .catch((err) => {
      if (err.code == "ER_DUP_ENTRY")
        res.status(200).json({ msg: "CUSTOMER_ALREADY_SIGNED" });
      else next(err);
    });
};

exports.getuser = async (req, res) => {
  try {
    const user = await get_user_by_email(req.query.email.toLowerCase());
    if (Object.entries(user).length === 0)
      return res.status(200).json({ msg: "CUSTOMER_NOT_FOUND" });
    else return res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
