/** @format */

"use client";

import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2024 Newsletterytics by Paweł Karniej</Text>
        <Stack direction="row" spacing={6} align="center">
          <Link
            href="/privacypolicy"
            color={useColorModeValue("brand.500", "brand.300")}
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            color={useColorModeValue("brand.500", "brand.300")}
          >
            Contact
          </Link>
          <IconButton
            as="a"
            href="https://x.com/pawelkarniej"
            aria-label="X (Twitter) Profile"
            icon={<FaXTwitter />}
            size="sm"
            colorScheme="gray"
            variant="ghost"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
