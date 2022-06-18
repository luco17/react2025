import {
  Box,
  Center,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import AddSiteModal from "./AddSiteModal";
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
          <Flex
            p={6}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("white", "black")}
          >
            <Text
              fontSize={"2xl"}
              fontWeight={800}
              align={"left"}
              color={useColorModeValue("black", "white")}
            >
              You haven't added any sites.
            </Text>
          </Flex>

          <Box bg={useColorModeValue("gray.50", "gray.700")} px={6} py={16}>
            <Container centerContent>
              <Text
                fontSize={"lg"}
                color={useColorModeValue("gray.600", "gray.400")}
                fontWeight={500}
              >
                Welcome 🌊, let's get started!
              </Text>
              <AddSiteModal />
            </Container>
          </Box>
        </Box>
      </Center>
    </DashboardShell>
  );
}