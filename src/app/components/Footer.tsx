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
} from "@chakra-ui/react";

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
        <Text>© 2024 Newsletterytics. All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          <Link href="#" color={useColorModeValue("brand.500", "brand.300")}>
            Privacy Policy
          </Link>
          <Link href="#" color={useColorModeValue("brand.500", "brand.300")}>
            Terms of Service
          </Link>
          <Link href="#" color={useColorModeValue("brand.500", "brand.300")}>
            Contact Us
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
