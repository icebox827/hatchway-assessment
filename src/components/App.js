import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import Student from '../containers/Student';

function App() {
  return (
    <ChakraProvider>
      <Student />
    </ChakraProvider>
  );
}

export default App;
