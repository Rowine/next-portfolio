import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay, Badge } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Link from 'next/link';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, href, title, thumbnail, isDown }) => (
  <Box w="100%" align="center">
    {isDown ? (
      <>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Box>
          <Text mt={2} fontSize={20}>
            {title}
            <p>
              <Badge vairant="outline" colorScheme="purple">
                Currently down
              </Badge>
            </p>
          </Text>
        </Box>
        <Text fontSize={14}>{children}</Text>
      </>
    ) : (
      <Link href={href} target="_blank">
        <LinkBox cursor={isDown ? '' : 'pointer'}>
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={href} target="_blank">
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Link>
    )}
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
        border-radius: 12px
        }
        `}
  />
);
