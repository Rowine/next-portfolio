'use client';

import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const CoffeeSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const CoffeeContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mb={['-40px', '-140px', '-100px']}
    w={[280, 480, 480]}
    h={[280, 480, 480]}
    position="relative"
  >
    {children}
  </Box>
));

CoffeeContainer.displayName = 'CoffeeContainer';

const Loader = () => {
  return (
    <CoffeeContainer>
      <CoffeeSpinner />
    </CoffeeContainer>
  );
};

export default Loader;
