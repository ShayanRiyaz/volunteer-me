import { Flex, Link } from '@chakra-ui/react';

export default function VolunteerLink({ pid })
{
    return (
        <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
            <Link fontWeight="bold" fontSize="sm" href={`/project/$[pid]`}>
                Sign up to Volunteer
            </Link>
            <Link fontSize="xs" color="blackAlpha.500"
            href="/">
                Powered by Volunteer Me
            </Link>
        </Flex>
    );
}