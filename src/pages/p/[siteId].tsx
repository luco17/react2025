import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { getAllFeedback, getAllSites } from "@/lib/dashboardAdmin";
import Feedback from "components/Feedback";
import type { FeedbackProps } from "components/Feedback";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { createFeedback } from "@/lib/firestore";

export const getStaticPaths: GetStaticPaths = async () => {
  const sites = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
  };
};

const SiteFeedback = ({ initialFeedback }) => {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback: FeedbackProps = {
      author: auth.user.displayName,
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      provider: auth.user.providerId,
      rating: 3,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      status: "pending",
    };

    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  return (
    <Center>
      <Box maxWidth="xl" w="full">
        <Box as="form" onSubmit={onSubmit}>
          <FormControl my={8}>
            <FormLabel htmlFor="comment">Comment</FormLabel>
            <Input ref={inputEl} type="comment" id="comment" />
            <Button mt={2} type="submit" fontWeight="medium">
              Add comment
            </Button>
          </FormControl>
        </Box>
        {allFeedback?.length ? (
          allFeedback.map((feedback: FeedbackProps) => (
            <Feedback key={feedback.id} {...feedback} />
          ))
        ) : (
          <Text>There are no comments for this site</Text>
        )}
      </Box>
    </Center>
  );
};

export default SiteFeedback;
