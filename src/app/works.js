import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';

import thumbOrganik from '../../public/works/organik.png';
import thumbLinkedIn from '../../public/works/image.png';

const Works = () => {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Works
      </Heading>
      <Section>
        <SimpleGrid>
          <WorkGridItem id="organik" title="Organik" thumbnail={thumbOrganik}>
            An e-commerce website made using React.js, Node.js, Express, and
            MongoDB
          </WorkGridItem>
        </SimpleGrid>
      </Section>
      <Section>
        <WorkGridItem
          id="linked_in_scraper"
          title="Linked In Scraper"
          thumbnail={thumbLinkedIn}
        >
          A Python Script file running on terminal built with Selenium and
          Pandas to extract data from LinkedIn profiles and company pages.
        </WorkGridItem>
      </Section>
    </>
  );
};

export default Works;
