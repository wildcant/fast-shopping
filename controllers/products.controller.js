const { products_get_chunk } = require("../models/products.model");

exports.products_paginated = async (req, res) => {
  const { page, sortBy, dir } = req.query;
  try {
    const currentPage = page == undefined ? 1 : page;
    const startIndex = (parseInt(currentPage) - 1) * 10;
    const response = await products_get_chunk(sortBy, dir, startIndex);
    response.currentPage = parseInt(currentPage);
    response.isLastPage = currentPage == response.numberOfPages ? true : false;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
