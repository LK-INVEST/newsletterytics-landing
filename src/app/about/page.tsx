/** @format */

"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isDarkMode = useColorModeValue(false, true);

  const images = isDarkMode
    ? [
        "screenshot-dark-1.png",
        "screenshot-dark-2.png",
        "screenshot-dark-3.png",
        "screenshot-dark-4.png",
      ]
    : [
        "screenshot-light-1.png",
        "screenshot-light-2.png",
        "screenshot-light-3.png",
        "screenshot-light-4.png",
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getVariants = (index: number) => ({
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  });

  return (
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
                optimizing your Beehiiv newsletters on the go. I&apos;ve
                designed the app to empower newsletter creators with real-time
                insights and powerful analytics tools.
              </MotionText>
              <MotionText
                fontSize="xl"
                color={useColorModeValue("gray.700", "gray.300")}
              >
                Whether you&apos;re a seasoned newsletter pro or just starting
                out, Newsletterytics provides the data you need to make informed
                decisions and grow your audience.
              </MotionText>
            </MotionBox>
            <MotionBox
              position="relative"
              width={{ base: "100%", sm: "340px" }}
              height={{ base: "720px", sm: "680px" }}
              mt={{ base: 8, md: 0 }}
              mx="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                borderRadius="60px"
                overflow="hidden"
                boxShadow="0 0 15px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.3)"
                bg={useColorModeValue("gray.200", "gray.800")}
              >
                <Box
                  position="absolute"
                  top="12px"
                  left="12px"
                  right="12px"
                  bottom="12px"
                  borderRadius="50px"
                  overflow="hidden"
                >
                  <AnimatePresence initial={false} custom={currentImageIndex}>
                    <MotionImage
                      key={currentImageIndex}
                      src={`slider/${images[currentImageIndex]}`}
                      alt={`Featured image ${currentImageIndex + 1}`}
                      objectFit="contain"
                      position="absolute"
                      top="0"
                      left="0"
                      custom={currentImageIndex}
                      variants={getVariants(currentImageIndex)}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                </Box>
              </Box>
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
              description="Keep your key metrics at your fingertips with a customizable HomeScreen widget, ensuring you're always up-to-date with your newsletter's performance."
              delay={1.2}
            />
            {/* <Feature
                title="Audience Segmentation"
                description="Dive deep into your subscriber base with powerful segmentation tools, helping you tailor your content to specific audience groups."
                delay={1.4}
              /> */}
            <Feature
              title="Performance Alerts"
              description="Set custom alerts for important milestones or sudden changes in your newsletter's performance, so you never miss a beat."
              delay={1.4}
            />
          </VStack>

          {/* <MotionHeading
            as="h2"
            size="xl"
            mt={8}
            color={useColorModeValue("gray.800", "gray.100")}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Meet The Team
          </MotionHeading>
          <VStack spacing={8} width="100%" align="center">
            <TeamMember
              name="Paweł Karniej"
              role="CEO"
              description="Visionary leader, coffee enthusiast."
              delay={1.8}
              avatar="/avatar.jpg"
            />
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              <TeamMember
                name="Paweł Karniej"
                role="CTO"
                description="Wearing all the hats in the tech department, because who needs sleep anyway?"
                delay={2.0}
                avatar="/avatar2.jpeg"
              />
              <TeamMember
                name="Paweł Karniej"
                role="CMO"
                description="Marketing genius by day, same person by night."
                delay={2.2}
                avatar="/avatar3.jpeg"
              />
              <TeamMember
                name="Paweł Karniej"
                role="CFO"
                description="Turning coffee into code and dreams into spreadsheets."
                delay={2.4}
                avatar="avatar4.jpeg"
              />
            </SimpleGrid>
          </VStack> */}
        </VStack>
      </Container>
    </Box>
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

const TeamMember: React.FC<{
  name: string;
  role: string;
  description: string;
  delay: number;
  avatar: string;
}> = ({ name, role, description, delay, avatar }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    align="center"
  >
    <Avatar name={name} src={avatar} size="lg" mb="4" />
    <Flex align="center" mb={4} justifyContent="center">
      <Box>
        <Heading
          as="h3"
          size="md"
          color={useColorModeValue("gray.700", "gray.200")}
        >
          {name}
        </Heading>
        <Text
          fontSize="md"
          fontWeight="bold"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {role}
        </Text>
      </Box>
    </Flex>
    <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
      {description}
    </Text>
  </MotionBox>
);
