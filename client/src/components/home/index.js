import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ProductCard from './ProductCard';
import SelectFilter from './SelectFilter';
import data from './testData';
const products = data.products;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    width: '100%',
    padding: 0,
    [theme.breakpoints.up('md')]: {
      displat: 'row',
    },
  },
  listItem: {
    height: '490px',
    width: '100%',
    padding: '1em 0',
    [theme.breakpoints.up('sm')]: {
      height: '300px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',
      width: '50%',
      padding: '1em',
    },
  },
  filterWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '1rem',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <section>
      <div className={classes.filterWrapper}>
        <Typography>Order By: </Typography> <SelectFilter />
      </div>
      <ul className={classes.cardsContainer}>
        {products.map((product, id) => (
          <li className={classes.listItem} key={id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
};
