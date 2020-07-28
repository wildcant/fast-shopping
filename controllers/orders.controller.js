const { create_order, create_order_item } = require("../models/orders.model");

exports.save_order = async (req, res, next) => {
  const { id_user, id_order, total_price, products } = req.body;
  try {
    await create_order([id_order, id_user, total_price]);
    for (const product of products) {
      await create_order_item([
        id_order,
        id_user,
        product.id_product,
        product.quantity,
      ]);
    }
    res.status(200).json({ msg: "ORDER_SAVED" });
  } catch (error) {
    next(error);
  }
};
