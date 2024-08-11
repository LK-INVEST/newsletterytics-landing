/** @format */

"use client";

import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navigation: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonText = useBreakpointValue({
    base: "Premium",
    sm: "Free Premium",
    md: "Get Free Premium",
  });
  const showAbout = useBreakpointValue({ base: false, sm: true });
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={bg} px={4} shadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Box
            fontWeight="bold"
            fontSize={{ base: "lg", md: "xl" }}
            color="brand.500"
            cursor="pointer"
          >
            Newsletterytics
          </Box>
        </Link>
        <Flex alignItems="center">
          {showAbout && (
            <Link href="/about" passHref legacyBehavior>
              <Button
                as="a"
                variant="ghost"
                mr={2}
                fontSize={{ base: "sm", md: "md" }}
                color={color}
              >
                About
              </Button>
            </Link>
          )}
          <Link href="/special-offer" passHref legacyBehavior>
            <Button
              as="a"
              variant="solid"
              colorScheme="brand"
              mr={2}
              fontWeight="bold"
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
              px={{ base: 2, sm: 3, md: 4 }}
              py={{ base: 1, sm: 2 }}
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
              bg="brand.500"
              color="white"
              _dark={{
                _hover: {
                  bg: "brand.600",
                },
              }}
              animation="pulseAndShake 5s infinite"
              sx={{
                "@keyframes pulseAndShake": {
                  "0%, 100%": { transform: "scale(1)" },
                  "10%": { transform: "scale(1.05) rotate(1deg)" },
                  "20%": { transform: "scale(1.05) rotate(-1deg)" },
                  "30%": { transform: "scale(1.05) rotate(1deg)" },
                  "40%": { transform: "scale(1)" },
                  "50%, 100%": { transform: "scale(1)" },
                },
              }}
            >
              {buttonText}
            </Button>
          </Link>
          <Button onClick={toggleColorMode} variant="ghost" p={1}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
