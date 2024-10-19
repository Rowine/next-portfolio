import { Box, Container } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import { Providers } from '@/components/chakra-provider';

export const metadata = {
  title: 'Rowine Mabiog - Homepage'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box as="main" pb={8}>
            <Navbar />
            <Container maxW="container.md" pt={14}>
              {children}
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
