import {
  Box,
  Center,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

export default function EmptyState() {
  return (
    <DashboardShell>
      <Center py={6}>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"lg"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Flex p={6} align={"center"} justify={"center"}>
            <Text fontSize={"2xl"} fontWeight={800} align={"left"}>
              You haven't added any sites.
            </Text>
          </Flex>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <Container centerContent>
              <Text fontSize={"lg"} color={"gray.600"} fontWeight={500}>
                Welcome 🌊, let's get started!
              </Text>
              <Button
                mt={4}
                maxW={"335px"}
                bg={"teal.500"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"md"}
                _hover={{
                  bg: "teal.400",
                }}
                _focus={{
                  bg: "teal.400",
                  border: "1px",
                  borderColor: "gray.600",
                }}
              >
                Add your first site
              </Button>
            </Container>
          </Box>
        </Box>
      </Center>
    </DashboardShell>
  );
}
