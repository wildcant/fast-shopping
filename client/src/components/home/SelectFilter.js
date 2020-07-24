import React, { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';

const SelectStyled = styled(Select)`
  margin: 0 0 0 1rem;
`;

const SelectFilter = ({ classes }) => {
  const [selectedOption, setSelectedOption] = useState('Ninguno');
  const options = ['Most Relevant', 'Lowest Price', 'Most Recent'];
  const selectOption = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <SelectStyled
      displayEmpty
      value={selectedOption}
      onChange={selectOption}
      variant="outlined"
      renderValue={(selected) => selected}
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem disabled value="">
        <em>Ninguno</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </SelectStyled>
  );
};

export default SelectFilter;
