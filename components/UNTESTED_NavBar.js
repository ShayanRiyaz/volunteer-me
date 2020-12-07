import React from 'react';
import { Heading, Flex, Text,Icon,Link } from '@chakra-ui/react';


const NavBar = () => (
    <Flex backgroundColor="white" mb={16} w="full">
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
        <Link mr={4} href="/project">Project</Link>
        <Link href="/volunteer" mr={4}>Volunteer</Link>
        <Link href="/about">About</Link>
      </Flex>
      
    </Flex>
  </Flex>
);

export default NavBar;