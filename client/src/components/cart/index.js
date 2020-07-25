import React from 'react';
import { Typography, Button } from '@material-ui/core';
import ShopingCard from './ShoppingCard';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'styles/cartStyles';
import { NavLink } from 'react-router-dom';

const products = [
  {
    id_product: '0172e9caba8351ea12832e4c42e0c840',
    name:
      'Dapol Model Railway Stanier 57ft Non-Corridor Coach - OO Gauge Plastic Kit',
    price: 14.99,
    category: 'Hobbies > Model Trains & Railway Sets > Rail Vehicles > Trains',
    description:
      'Dapol OO Gauge Stanier 57ft non corridor coach in BR Carmine Red Livery, unlined. Plastic model kit. Manufacturers Description: William Stanier (1876-1965) was headhunted from the GWR to become Chief Mechanical Engineer of London, Midland and Scottish (LMS) Railways in 1932. With the support of the Chairman, Sir Josiah Stamp, Stanier is credited with modernising the LMS fleet of generally small steam locomotives with a larger, modern and more powerful array of designs. Soon after his appointment, Stanier also focused on refurbishing and standardising the Coach stock of the LMS and developed the Period III LMS coaches which later became known as Stanier Coaches. These designs were extremely popular and successful and many were still in service in the mid 1960s. There are many examples of Period III coaches operating on Heritage Railways throughout the UK today. The Dapol OO Model of the Stanier Coach is derived from refurbished Airfix/Mainline tooling originally purchased by Dapol in t',
    date: '2020-07-23T07:55:00.000Z',
  },
  {
    id_product: '03a35de3f7af9814978e6de645cb8ffa',
    name:
      'Hornby 00 Gauge 253mm Weathered Paviland Grange Steam Locomotive Train Model',
    price: 119.5,
    category: 'Hobbies > Model Trains & Railway Sets > Rail Vehicles > Trains',
    description:
      'Product Description Hornby Weathered DCC Ready 00 Gauge Paviland Grange steam locomotive train model. Its features: Sprung buffers, sliding cab roof hatch, NEM couplings, tender detail. Class: grange, designer: C.B. collett, entered service: 1936, number built: 80, purpose: mixed traffic, wheel configuration: 4-6-0, length: 253mm, motor: 5 pole skew wound. loco drive, DCC ready, livery: BR (late), finish: heavily weathered Box Contains 1x Train Model',
    date: '2020-07-23T07:54:53.000Z',
  },
];

const useStyles = makeStyles(styles);

const Cart = () => {
  const classes = useStyles();
  const total = products
    .map((product) => product.price)
    .reduce((total, price) => total + price);

  return (
    <>
      <div className={classes.top}>
        <Typography variant="h3">Shopping Cart</Typography>
        <Button variant="outlined">Check Out</Button>
      </div>
      <ul className={classes.cardsContainer}>
        {products.map((product, id) => (
          <li className={classes.listItem} key={id}>
            <ShopingCard {...product} />
          </li>
        ))}
      </ul>
      <NavLink to="/" className={classes.link}>
        Continue Shopping
      </NavLink>
      <div className={classes.bottom}>
        <Typography variant="h4">Total: ${total}</Typography>
        <Button variant="outlined">Check Out</Button>
      </div>
    </>
  );
};

Cart.propTypes = {};

export default Cart;
