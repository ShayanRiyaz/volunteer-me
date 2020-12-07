
import { useForm } from "react-hook-form";

import { useAuth } from "@/lib/auth";
import { mutate } from 'swr';
import {
  Modal,
  ModelOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  useToast,
  ModalOverlay,
} from "@chakra-ui/react";

import { createProject } from "@/lib/db";

const AddProjectModal = ({ children }) => {
  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register } = useForm();

  // const onCreateProject = (values) => {
  //     createProject(values);

  const onCreateProject = ({ name,
    url,
    projectFocus,
    requiredVolunteers,
    city,
    country,
    startDate,
    endDate 
  }) => {
    const newProject = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      projectFocus,
      requiredVolunteers,
      city,
      country,
      startDate,
      endDate,
    };
    createProject(newProject);
    toast({
      title: "Success!",
      description: "We've added your project.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    mutate('/api/projects', async (data) => {
      return { projects: [...data.projects, newProject] };
    }, false);
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        fontWeight="medium"
        maxW="200px"
        backgroundColor="gray.900"
        color="white"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        {/* +  */}
        {/* Add your First Project */}
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateProject)}>
          <ModalHeader fontWeight="bold">Add Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My Project"
                name="name"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Focus</FormLabel>
              <Input
                placeholder="e.g. Education"
                name="projectFocus"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Volunteers Needed</FormLabel>
              <Input
                placeholder="e.g. 10"
                name="requiredVolunteers"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="e.g. Toronto"
                name="city"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Country</FormLabel>
              <Input
                placeholder="e.g. Canada"
                name="country"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Start Date</FormLabel>
              <Input
                placeholder="01-01-2020"
                name="startDate"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>End Date</FormLabel>
              <Input
                placeholder="01-01-2021"
                name="endDate"
                ref={register({
                  required: "Required",
                })}
              />
            </FormControl>
          </ModalBody>



          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProjectModal;
