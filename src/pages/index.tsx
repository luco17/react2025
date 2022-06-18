import { Text } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";

import { Hero } from "components/Hero";
import { Container } from "components/Container";
import { Main } from "components/Main";
import { DarkModeSwitch } from "components/DarkModeSwitch";
import { CTA } from "components/CTA";
import { Footer } from "components/Footer";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const auth = useAuth();

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Flex justifyContent="center" alignItems="center">
          {auth.user ? (
            <div>
              <Container>
                <Text
                  color="#4A5568
"
                  fontSize="3xl"
                  fontWeight="bold"
                  my={2}
                >
                  Current user: {auth.user.displayName}
                </Text>
                <Button onClick={(e) => auth.signOut()}>Sign out</Button>
              </Container>
            </div>
          ) : (
            <Button onClick={(e) => auth.signInWithGithub()}>Sign In</Button>
          )}
        </Flex>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>&copy; Rahul Capardia 2022</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Index;
