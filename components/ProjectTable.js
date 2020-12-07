import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { parseISO, format } from 'date-fns';
import NextLink from 'next/link';

const ProjectTable = ({ projects }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Project Link</Th>
          <Th>Project Focus</Th>
          {/* <Th>Date Added</Th> */}
          <Th>Required Volunteers</Th>
          <Th>Start Date</Th>
          <Th>End Date Added</Th>
          <Th>City </Th>
          {/* <Th>Country</Th> */}
          <Th>Volunteers</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <Box as="tr" key={project.url}>
            <Td fontWeight="medium">{project.name}</Td>
            <Td><Link href={project.url} isExternal>
                {project.url}
              </Link></Td>
            <Td>{project.projectFocus}</Td>
            {/* <Td>{format(parseISO(project.createdAt), 'PPpp')}</Td> */}
            <Td>{project.requiredVolunteers}</Td>
            <Td>{project.startDate}</Td>
            <Td>{project.endDate}</Td>
            <Td>{project.city}, {project.country}</Td>
            {/* <Td>{project.country}</Td> */}
              
              <Td>
              <NextLink 
              href="/project/[pid]" 
              as = {`/project/${project.pid}`} passHref>
              <Link>View Volunteers</Link>
              </NextLink>
              </Td>
              {/* <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td> */}
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default ProjectTable;