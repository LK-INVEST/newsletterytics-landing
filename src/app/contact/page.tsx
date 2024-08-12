/** @format */
"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionLink = motion(Link);

export default function Contact() {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <MotionBox
      bg={bgColor}
      minH="calc(100vh - 64px)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.md" py={16}>
        <VStack spacing={8} align="start">
          <MotionHeading
            as="h1"
            size="2xl"
            color={useColorModeValue("gray.800", "gray.100")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </MotionHeading>
          <MotionText
            fontSize="xl"
            color={useColorModeValue("gray.600", "gray.300")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I&apos;d love to hear from you! Whether you have a question about
            the app, want to suggest a new feature, or just want to say hello,
            I&apos;m all ears.
          </MotionText>
          <MotionText
            fontSize="xl"
            color={useColorModeValue("gray.600", "gray.300")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Please feel free to reach out to me at:
          </MotionText>
          <MotionLink
            href="mailto:contact@pawelkarniej.com"
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("brand.600", "brand.300")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            contact@pawelkarniej.com
          </MotionLink>
        </VStack>
      </Container>
    </MotionBox>
  );
}
