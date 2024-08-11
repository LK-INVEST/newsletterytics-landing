/** @format */

"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const PrivacyPolicy = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MotionBox
      bg={bgColor}
      minHeight="calc(100vh - 64px)"
      py={10}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.md">
        <VStack
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={6}
          align="stretch"
        >
          <MotionHeading
            as="h1"
            size="2xl"
            textAlign="center"
            mb={6}
            variants={itemVariants}
          >
            Privacy Policy for Newsletterytics
          </MotionHeading>

          <MotionText variants={itemVariants}>
            Effective Date: 19.07.2024
          </MotionText>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              1. Introduction
            </Heading>
            <Text color={textColor}>
              Welcome to Newsletterytics. Your privacy is important to us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our mobile application.
              Please read this policy carefully to understand our views and
              practices regarding your personal data.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              2. Information We Collect
            </Heading>
            <Text color={textColor}>
              • Personal Information: When you register and use the app, we may
              collect personal information such as your name, email address, and
              other contact details.
              <br />
              • Usage Data: We collect information about your interactions with
              the app, including the features you use, the actions you take, and
              the time, frequency, and duration of your activities.
              <br />
              • Device Information: Information about the device you use to
              access the app, including hardware model, operating system and
              version, unique device identifiers, and mobile network
              information.
              <br />
              • Location Data: With your permission, we may collect information
              about the location of your device to provide location-based
              services.
              <br />• Analytics Data: We use Firebase Analytics to collect usage
              data about how you interact with our app. This may include
              information such as app opens, feature usage, and interaction with
              in-app elements.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              3. How We Use Your Information
            </Heading>
            <Text color={textColor}>
              • To Provide and Manage Services: We use your information to
              operate, maintain, and provide you with the features and
              functionality of the app.
              <br />
              • To Improve Services: We analyze usage and analytics data to
              improve the app's functionality and user experience.
              <br />
              • To Communicate with You: We may use your contact information to
              send you updates, security alerts, and support and administrative
              messages.
              <br />• To Ensure Security: We use your information to detect and
              prevent fraud, abuse, and other harmful activities.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              4. Sharing Your Information
            </Heading>
            <Text color={textColor}>
              We do not share your personal information with third parties
              except in the following circumstances:
              <br />
              • With Your Consent: We may share your information with third
              parties if you have given us your consent to do so.
              <br />
              • For Legal Reasons: We may share your information to comply with
              applicable laws, regulations, legal processes, or governmental
              requests.
              <br />
              • Business Transfers: In connection with any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
              <br />• Service Providers: We may share your information with
              third-party service providers, including analytics providers (such
              as Firebase), who help us understand app usage and improve our
              services.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              5. Security of Your Information
            </Heading>
            <Text color={textColor}>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide,
              please be aware that despite our efforts, no security measures are
              perfect or impenetrable, and no method of data transmission can be
              guaranteed against any interception or other type of misuse.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              6. Your Choices
            </Heading>
            <Text color={textColor}>
              • Account Information: You may update, correct, or delete your
              account information at any time by accessing your account settings
              within the app.
              <br />
              • Location Data: You can disable location services in your
              device's settings at any time.
              <br />
              • Communications: You can opt-out of receiving promotional
              communications from us by following the instructions in those
              communications.
              <br />• Analytics: You may opt out of analytics data collection
              through your device settings or by contacting us at
              contact@pawelkarniej.com.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              7. Children's Privacy
            </Heading>
            <Text color={textColor}>
              Our app does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from
              children under 13. If we become aware that we have collected
              personal data from children under age 13 without verification of
              parental consent, we take steps to delete that information.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              8. Changes to This Privacy Policy
            </Heading>
            <Text color={textColor}>
              We may update this Privacy Policy from time to time. If we make
              significant changes, we will notify you of the changes through the
              app or through other means, such as email. Your continued use of
              the app after such notification will constitute your
              acknowledgment of the changes and your agreement to be bound by
              the terms and conditions of such changes.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Heading as="h2" size="lg" mb={2}>
              9. Contact Us
            </Heading>
            <Text color={textColor}>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
              <br />
              contact@pawelkarniej.com
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </MotionBox>
  );
};

export default PrivacyPolicy;
