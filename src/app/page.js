import { Container, Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a Computer Engineering Student from PUP!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rowine Mabiog
          </Heading>
          <p>Javascript / React / Python Developer</p>
        </Box>
      </Box>
    </Container>
  );
}
