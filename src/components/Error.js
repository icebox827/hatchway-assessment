import React from 'react';
import { Center } from '@chakra-ui/react';
import try_again from '../assets/try_again.gif';

function Error() {
  return (
    <Center>
      <img src={try_again} className="error" alt=""/>
    </Center>
  );
}

export { Error };