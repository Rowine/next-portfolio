import { Heading, SimpleGrid } from '@chakra-ui/react';
import { WorkGridItem } from '@/components/grid-item';
import Section from '@/components/section';

import thumbOrganik from '../../public/works/organik.png';
import thumbSlack from '../../public/works/slack_clone.png';
import thumbLeaveManagement from '../../public/works/leave_management.png';

const Works = () => {
  return (
    <>
      <Heading as="h3" variant="section-title">
        Works
      </Heading>
      <Section>
        <SimpleGrid>
          <WorkGridItem
            href="https://organik.vercel.app"
            title="Organik"
            thumbnail={thumbOrganik}
            isDown={false}
          >
            An e-commerce website made using React.js, Node.js, Express, and
            MongoDB
          </WorkGridItem>
        </SimpleGrid>
      </Section>
      <Section>
        <WorkGridItem
          href="https://leave-management-system-livid.vercel.app/"
          title="Leave Management System"
          thumbnail={thumbLeaveManagement}
        >
          A leave management system made using React.js, Node.js, Express, and
          MongoDB.
        </WorkGridItem>
      </Section>
      <Section>
        <WorkGridItem title="Slack clone" thumbnail={thumbSlack} isDown={true}>
          A Slack application clone made using Next.js, Jotai, TailwindCSS,
          Socket.IO and Convex.
        </WorkGridItem>
      </Section>
    </>
  );
};

export default Works;
