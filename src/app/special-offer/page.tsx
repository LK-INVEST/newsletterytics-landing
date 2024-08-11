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
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Step = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <Card>
    <CardHeader>
      <Heading size="md" display="flex" alignItems="center">
        <Box
          as="span"
          mr={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          borderRadius="full"
          bg="brand.500"
          color="white"
        >
          {number}
        </Box>
        {title}
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>{description}</Text>
    </CardBody>
  </Card>
);

export default function SpecialOffer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      minH="calc(100vh - 64px)"
    >
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12} align="stretch">
          <MotionHeading
            as="h1"
            size="2xl"
            color={useColorModeValue("brand.600", "brand.400")}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Special Offer: Unlock Premium for Free!
          </MotionHeading>

          <MotionText
            fontSize="xl"
            color={useColorModeValue("gray.700", "gray.300")}
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&apos;re excited to offer you an exclusive opportunity to access
            all premium features of Newsletterytics absolutely free for a full
            year! Here&apos;s how it works:
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <Heading as="h2" size="lg">
                  How to Claim Your Free Premium Access:
                </Heading>
              </CardHeader>
              <CardBody>
                <Grid
                  templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                  gap={6}
                >
                  <GridItem>
                    <Step
                      number={1}
                      title="Sign Up"
                      description="Sign up for Beehiiv using our affiliate link"
                    />
                  </GridItem>
                  <GridItem>
                    <Step
                      number={2}
                      title="Upgrade"
                      description="Become a paid Beehiiv user"
                    />
                  </GridItem>
                  <GridItem>
                    <Step
                      number={3}
                      title="Get Code"
                      description="Receive a 100% off promo code for a yearly subscription to Newsletterytics"
                    />
                  </GridItem>
                  <GridItem>
                    <Step
                      number={4}
                      title="Enjoy"
                      description="Enjoy all premium features of Newsletterytics free for a year!"
                    />
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </MotionBox>

          <Box textAlign="center">
            <MotionButton
              as="a"
              href="https://www.beehiiv.com?via=fb6005"
              size="lg"
              bg="brand.500"
              color="white"
              _hover={{
                bg: "brand.600",
              }}
              rightIcon={<ChevronRightIcon />}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up for Beehiiv Now
            </MotionButton>
          </Box>

          <Alert
            status="info"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            borderRadius="md"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Why Choose Newsletterytics Premium?
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              <List spacing={3} mt={4}>
                {[
                  "Advanced analytics and insights",
                  "Unlimited newsletter tracking",
                  "Custom HomeScreen widgets",
                  "Early access to new features",
                ].map((feature, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {feature}
                  </ListItem>
                ))}
              </List>
            </AlertDescription>
          </Alert>

          <MotionText
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color={useColorModeValue("gray.700", "gray.200")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            Don&apos;t miss out on this incredible offer! Sign up for Beehiiv
            today and supercharge your newsletter growth with Newsletterytics
            Premium.
          </MotionText>
        </VStack>
      </Container>
    </Box>
  );
}
