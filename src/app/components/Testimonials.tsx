/** @format */

"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Avatar,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface TestimonialProps {
  content: string;
  author: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  avatar,
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    bg={useColorModeValue("white", "gray.700")}
    p={6}
    borderRadius="lg"
    boxShadow="lg"
    maxW="md"
  >
    <Text
      fontSize="lg"
      mb={4}
      color={useColorModeValue("gray.600", "gray.200")}
    >
      &ldquo;{content}&rdquo;
    </Text>
    <Flex align="center">
      <Avatar src={avatar} mr={4} />
      <Text fontWeight="bold" color={useColorModeValue("gray.700", "gray.100")}>
        {author}
      </Text>
    </Flex>
  </MotionBox>
);

const Testimonials: React.FC = () => {
  return (
    <Box py={20} bg={useColorModeValue("gray.100", "gray.800")}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          mb={10}
          textAlign="center"
          color={useColorModeValue("gray.700", "gray.100")}
        >
          First User Opinion
        </Heading>
        <Flex justify="center" wrap="wrap" gap={8}>
          <Testimonial
            content="very cool"
            author="Ej from beehiiv"
            avatar="https://pbs.twimg.com/profile_images/1722741086249218048/zAMRNTk7_400x400.jpg"
          />
          {/* <Testimonial
            content="I love how easy it is to track my newsletter's performance on the go. Great app!"
            author="John Smith"
            avatar="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
          />
          <Testimonial
            content="The real-time stats have helped me make data-driven decisions to grow my audience."
            author="Emily Johnson"
            avatar="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
          /> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials;
