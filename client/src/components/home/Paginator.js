import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import React from 'react';

const Paginator = ({ pages, current, handleChange }) => (
  <Pagination
    count={pages}
    page={current}
    onChange={handleChange}
    shape="rounded"
  />
);

Paginator.propTypes = {
  pages: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Paginator;
