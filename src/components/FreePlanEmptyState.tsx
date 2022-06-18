import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
  Heading,
} from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

export default function FreePlanEmptyState() {
  return (
    <DashboardShell>
      <Center py={6}>
        <Box
          maxW="lg"
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack p={6} direction={"row"} align={"center"} justify={"center"}>
            <Heading fontSize={"2xl"} fontWeight={800}>
              Get feedback on your site instantly.
            </Heading>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <Container centerContent>
              <Text fontSize={"lg"} color={"gray.600"} fontWeight={500}>
                Start today and get the customer touchpoint you need 🎯
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
                Start your trial
              </Button>
            </Container>
          </Box>
        </Box>
      </Center>
    </DashboardShell>
  );
}
