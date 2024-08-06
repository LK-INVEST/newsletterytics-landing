/** @format */

"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageUrl,
  isReversed = false,
}) => {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: isReversed ? "row-reverse" : "row" }}
          align="center"
          justify="space-between"
        >
          <MotionBox
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            flex={1}
          >
            <Heading
              as="h2"
              size="xl"
              mb={4}
              color={useColorModeValue("gray.700", "gray.100")}
            >
              {title}
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {description}
            </Text>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            flex={1}
            textAlign="center"
          >
            <Image
              src={imageUrl}
              alt={title}
              maxW="300px"
              mx="auto"
              boxShadow={useColorModeValue("lg", "dark-lg")}
              borderRadius="lg"
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default FeatureSection;
