import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectStyled = styled(Select)`
  margin: 0 0 0 1rem;
`;

const SelectFilter = ({ selectedOption, options, handleSelect }) => {
  return (
    <SelectStyled
      displayEmpty
      value={selectedOption}
      onChange={handleSelect}
      variant="outlined"
      renderValue={(selected) => selected}
      inputProps={{ 'aria-label': 'filter' }}
    >
      {options.map((option, id) => (
        <MenuItem key={id} id={id} value={option}>
          {option}
        </MenuItem>
      ))}
    </SelectStyled>
  );
};

SelectFilter.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default SelectFilter;
