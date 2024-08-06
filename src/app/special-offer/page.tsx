/** @format */

"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function SpecialOffer() {
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
              Special Offer: Unlock Premium for Free!
            </MotionHeading>

            <MotionText
              fontSize="xl"
              color={useColorModeValue("gray.700", "gray.300")}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're excited to offer you an exclusive opportunity to access all
              premium features of Newsletterytics absolutely free for a full
              year! Here's how it works:
            </MotionText>

            <MotionBox
              bg={useColorModeValue("white", "gray.800")}
              p={8}
              borderRadius="lg"
              shadow="xl"
              width="100%"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <VStack spacing={6} align="start">
                <Heading
                  as="h2"
                  size="lg"
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  How to Claim Your Free Premium Access:
                </Heading>
                <List
                  spacing={3}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Sign up for Beehiiv using our affiliate link
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Become a paid Beehiiv user
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Receive a 100% off promo code for a yearly subscription to
                    Newsletterytics
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Enjoy all premium features of Newsletterytics free for a
                    year!
                  </ListItem>
                </List>
                <MotionButton
                  as="a"
                  href="#" // Replace with your Beehiiv affiliate link
                  size="lg"
                  bg="brand.500"
                  color={useColorModeValue("white", "gray.200")}
                  _hover={{
                    bg: useColorModeValue("brand.600", "brand.700"),
                  }}
                  mt={4}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up for Beehiiv Now
                </MotionButton>
              </VStack>
            </MotionBox>

            <MotionHeading
              as="h2"
              size="xl"
              mt={8}
              color={useColorModeValue("gray.700", "gray.200")}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Why Choose Newsletterytics Premium?
            </MotionHeading>
            <List spacing={3} color={useColorModeValue("gray.600", "gray.300")}>
              <AnimatedListItem
                text="Advanced analytics and insights"
                delay={0.8}
              />
              <AnimatedListItem
                text="Unlimited newsletter tracking"
                delay={0.9}
              />
              <AnimatedListItem text="Custom HomeScreen widgets" delay={1.0} />
              <AnimatedListItem text="Priority customer support" delay={1.1} />
              <AnimatedListItem
                text="Early access to new features"
                delay={1.2}
              />
            </List>

            <MotionText
              fontSize="xl"
              fontWeight="bold"
              mt={8}
              color={useColorModeValue("gray.700", "gray.200")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Don't miss out on this incredible offer! Sign up for Beehiiv today
              and supercharge your newsletter growth with Newsletterytics
              Premium.
            </MotionText>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

const AnimatedListItem: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => (
  <MotionBox
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      {text}
    </ListItem>
  </MotionBox>
);
