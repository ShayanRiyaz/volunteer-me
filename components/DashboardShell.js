import React from 'react';

import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Button,
    Flex,
    Link,
    Avatar,
    Icon
  } from '@chakra-ui/react';

import { useAuth } from '../lib/auth';
import { GoSignOut } from 'react-icons/go';
import AddProjectModal from './AddProjectModal';

  const DashboardShell = ({ children}) => {
      const {user, signout } = useAuth();


      return (
          <Box backgroundColor="gray.100" h="100vh">
              <Flex backgroundColor="white mb={16}" w="full">
                  <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  pt={4}
                  pb={4}
                  maxW="1250px"
                  margin="0 auto"
                  w="full"
                  px={8}
                  h="70px"
                  >
                      <Flex>
                    <Icon name="logo" size="24px" mr={8} />
                    <Link mr={4}>Projects</Link>
                    <Link>Volunteer</Link>
                    
                  </Flex>
              <Flex 
              justifyContent="center" 
              alignItems="center">
                {user &&  (
                  <Button leftIcon={<GoSignOut />} variant="ghost" mr={2} onClick={()=> signout()}>
                      Log Out
                  </Button>
                  )}
                  <Avatar size="sm" src={user?.photoUrl} />
                  </Flex>
                  </Flex>
              </Flex>
            <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
                <Breadcrumb>
                <BreadcrumbItem>
                
                <BreadcrumbLink>Projects</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
                <Flex justifyContent="space-between">
                    <Heading mb={8}>My Projects</Heading>
                    <AddProjectModal> Add Project</AddProjectModal>
                    {/* <Button
                    backgroundColor="gray.900"
                    color="white"
                    fontWeight="medium"
                    _hover={{ bg: 'gray.700' }}
                    _active={{
                      bg: 'gray.800',
                      transform: 'scale(0.95)'
                    }}
                    >
                    + Add Project
                    </Button> */}
            </Flex>
            {children}
          </Flex>
          </Box>
      );
  };


export default DashboardShell;