'use client';

import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Computer Engineering Student from PUP!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rowine Mabiog
          </Heading>
          <p>Javascript / React / Python Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            width="100px"
            height="100px"
            display="inline-block"
            borderRadius="full"
            objectFit="cover"
            objectPosition="center"
            src="/images/rowine.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  );
}
