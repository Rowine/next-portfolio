'use client';

import Logo from './logo';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link
      href={href}
      pt={2}
      pl={2}
      pr={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  );
};

const Navbar = props => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <Link href="/">
                  <MenuItem as={Link}>About</MenuItem>
                </Link>
                <Link href="/works">
                  <MenuItem as={Link}>Works</MenuItem>
                </Link>
                <Link href="/posts">
                  <MenuItem as={Link}>Posts</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
