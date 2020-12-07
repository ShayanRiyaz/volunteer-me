import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

import Volunteer from '@/components/VolunteerComponents/Volunteer';
import { useAuth } from '@/lib/auth'
import { createVolunteer } from 