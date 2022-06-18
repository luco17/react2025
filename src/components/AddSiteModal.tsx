import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        mt={4}
        maxW={"335px"}
        bg={useColorModeValue("teal.500", "pink.400")}
        color={"white"}
        boxShadow={"md"}
        _hover={{
          opacity: 0.8,
        }}
        _focus={{
          border: "1px",
          borderColor: "gray.300",
        }}
      >
        Add your first site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input ref={initialRef} placeholder="My Awesome Blog" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder="https://myawesomeblog.xyz" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="" _hover={{ bg: "", opacity: 0.8 }} onClick={onClose}>
              Cancel
            </Button>
            <Button _hover={{ opacity: 0.9 }} bg="teal.500" mr={3}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
