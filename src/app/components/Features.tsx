/** @format */

import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaChartLine,
  FaNewspaper,
  FaChartBar,
  FaMobileAlt,
  FaUserPlus,
} from "react-icons/fa";
import { motion, MotionProps } from "framer-motion";
import { IconType } from "react-icons";

const MotionBox = motion(Box);

interface FeatureProps {
  title: string;
  text: string;
  icon: IconType;
}

const Feature: React.FC<FeatureProps> = ({ title, text, icon }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Stack align="center" textAlign="center">
        <Flex
          w={16}
          h={16}
          align="center"
          justify="center"
          color="white"
          rounded="full"
          bg="brand.500"
          mb={1}
        >
          <Icon as={icon} w={10} h={10} />
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={useColorModeValue("gray.600", "gray.200")}>{text}</Text>
      </Stack>
    </MotionBox>
  );
};

const Features: React.FC = () => {
  return (
    <Box bg={useColorModeValue("white", "gray.800")} py={20}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={10}>
          <Feature
            icon={FaChartLine}
            title="Real-time Stats"
            text="Display your newsletter statistics inside the app"
          />
          <Feature
            icon={FaNewspaper}
            title="Multiple Newsletters"
            text="Manage multiple newsletters in one place"
          />
          <Feature
            icon={FaChartBar}
            title="Detailed Analytics"
            text="Check how your latest posts are performing"
          />
          <Feature
            icon={FaMobileAlt}
            title="HomeScreen Widget"
            text="Display selected newsletter stats on your home screen"
          />
          <Feature
            icon={FaUserPlus}
            title="Multiple Accounts"
            text="Connect multiple accounts to track more newsletters"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Features;
