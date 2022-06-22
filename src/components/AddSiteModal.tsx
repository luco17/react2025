import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useToast,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useColorModeValue,
} from "@chakra-ui/react";

import { createSite } from "@/lib/firestore";
import { useAuth } from "@/context/AuthContext";

interface FormInputs {
  siteName: string;
  siteUrl: string;
}

export interface SiteData extends FormInputs {
  siteAuthor: string;
  entryDate: string;
}

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const { register, handleSubmit } = useForm<FormInputs>();
  const toast = useToast();
  const auth = useAuth();

  const addSite: SubmitHandler<FormInputs> = (values) => {
    const { siteName, siteUrl } = values;

    const newSite: SiteData = {
      siteAuthor: auth.user.uid,
      entryDate: new Date().toISOString(),
      siteName,
      siteUrl,
    };

    createSite(newSite);
    toast({
      title: "Success!",
      description: "We've added your site",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

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
        <ModalContent as="form" onSubmit={handleSubmit(addSite)}>
          <ModalHeader fontWeight={"bold"}>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My Awesome Blog"
                {...register("siteName", { required: true })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>URL</FormLabel>
              <Input
                placeholder="https://myawesomeblog.xyz"
                {...register("siteUrl", { required: true })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="" _hover={{ bg: "", opacity: 0.8 }} onClick={onClose}>
              Cancel
            </Button>
            <Button
              _hover={{ opacity: 0.9 }}
              bg="teal.500"
              mr={3}
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
