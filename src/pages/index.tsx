import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { useAuth } from "../../context/AuthContext";

const Index = () => {
  const auth = useAuth();

  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <button onClick={(e) => auth.signInWithGithub()}>Sign In</button>
        <p>{auth?.user?.email}</p>
        {auth?.user && (
          <button onClick={(e) => auth.signOut()}>Sign out</button>
        )}
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Lucien ❤️ Holly</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Index;
