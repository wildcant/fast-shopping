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
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };
  console.log(selectedOption);
  return (
    <SelectStyled
      displayEmpty
      value={selectedOption}
      onChange={selectOption}
      variant="outlined"
      // MenuProps={MenuProps}
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
