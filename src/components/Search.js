import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'
import { Flex, Input } from '@chakra-ui/react';

const Search = ({filterChange}) => {
  const [value, setValue] = useState([]);

  const selectedStudent = value.filter((std) => {
    setValue(value);
    return std.toLowerCase().includes(string.toLowerCase());
  });

  return (
    <Flex w="100">
      <Input 
        size="lg"
        name="name"
        placeholder="Search By Name"
        value={selectedStudent}
        onChange={e => filterChange(e.target.value)}
      />
    </Flex>
  )
};

Search.propTypes = {
  filterChange: PropTypes.func.isRequired,
}

export default Search;