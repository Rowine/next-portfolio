'use client';

import theme from '@/libs/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import Fonts from '@/components/fonts';

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Fonts />
      {children}
    </ChakraProvider>
  );
}
