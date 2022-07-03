import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

export interface FeedbackProps {
  id?: string;
  author: string;
  authorId: string;
  createdAt: string;
  provider: string;
  rating?: number;
  siteId: string | string[];
  status: string;
  text: string;
}

const Feedback = (props: FeedbackProps) => {
  const { author, text, createdAt } = props;

  return (
    <Box mb={4}>
      <Heading size="sm">{author}</Heading>
      <Text color="gray.500" mb={1} fontSize="xs">
        {format(parseISO(createdAt), "PPpp")}
      </Text>
      <Box>
        <Text fontSize="sm">{text}</Text>
      </Box>
      <Divider />
    </Box>
  );
};

export default Feedback;
