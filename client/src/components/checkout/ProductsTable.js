import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { TableWraper, TableContainerFixed } from 'styles/checkoutStyles';

const ProductsTable = ({ products }) => (
  <TableWraper>
    <TableContainerFixed>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">{product.amount}</TableCell>
              <TableCell align="center">
                {product.amount * product.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerFixed>
  </TableWraper>
);

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id_product: PropTypes.string.isRequired,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      amount: PropTypes.number,
    })
  ).isRequired,
};

export default ProductsTable;
