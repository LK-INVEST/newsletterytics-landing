/** @format */

"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function About() {
  return (
    <>
      <Navigation />
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        minH="calc(100vh - 64px)"
      >
        <Container maxW="container.xl" py={16}>
          <VStack spacing={12} align="start">
            <MotionHeading
              as="h1"
              size="2xl"
              color={useColorModeValue("brand.600", "brand.400")}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Newsletterytics
            </MotionHeading>

            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify="space-between"
            >
              <MotionBox
                flex={1}
                pr={{ base: 0, md: 8 }}
                mb={{ base: 8, md: 0 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <MotionText
                  fontSize="xl"
                  mb={4}
                  color={useColorModeValue("gray.700", "gray.300")}
                >
                  Newsletterytics is your all-in-one solution for tracking and
                  optimizing your Beehiiv newsletters on the go. We've designed
                  our app to empower newsletter creators with real-time insights
                  and powerful analytics tools.
                </MotionText>
                <MotionText
                  fontSize="xl"
                  color={useColorModeValue("gray.700", "gray.300")}
                >
                  Whether you're a seasoned newsletter pro or just starting out,
                  Newsletterytics provides the data you need to make informed
                  decisions and grow your audience.
                </MotionText>
              </MotionBox>
              <MotionBox
                flex={1}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/app-showcase.png"
                  alt="Newsletterytics App Showcase"
                  borderRadius="lg"
                  shadow="2xl"
                />
              </MotionBox>
            </Flex>

            <MotionHeading
              as="h2"
              size="xl"
              mt={8}
              color={useColorModeValue("gray.800", "gray.100")}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Key Features
            </MotionHeading>
            <VStack spacing={6} align="start">
              <Feature
                title="Real-time Analytics"
                description="Get instant insights into your newsletter's performance with up-to-the-minute data on opens, clicks, and subscriber growth."
                delay={0.8}
              />
              <Feature
                title="Multi-Newsletter Management"
                description="Effortlessly manage multiple newsletters from a single dashboard, allowing you to compare performance and streamline your workflow."
                delay={1.0}
              />
              <Feature
                title="HomeScreen Widget"
                description="Keep your key metrics at your fingertips with our customizable HomeScreen widget, ensuring you're always up-to-date with your newsletter's performance."
                delay={1.2}
              />
              <Feature
                title="Audience Segmentation"
                description="Dive deep into your subscriber base with powerful segmentation tools, helping you tailor your content to specific audience groups."
                delay={1.4}
              />
              <Feature
                title="Performance Alerts"
                description="Set custom alerts for important milestones or sudden changes in your newsletter's performance, so you never miss a beat."
                delay={1.6}
              />
            </VStack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

const Feature: React.FC<{
  title: string;
  description: string;
  delay: number;
}> = ({ title, description, delay }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Heading
      as="h3"
      size="md"
      mb={2}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      {title}
    </Heading>
    <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
      {description}
    </Text>
  </MotionBox>
);
