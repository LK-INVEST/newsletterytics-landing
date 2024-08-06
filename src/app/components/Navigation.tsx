/** @format */

"use client";

import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navigation: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      px={4}
      shadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Box
            fontWeight="bold"
            fontSize="xl"
            color="brand.500"
            cursor="pointer"
          >
            Newsletterytics
          </Box>
        </Link>
        <Flex alignItems="center">
          <Link href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              mr={3}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              About
            </Button>
          </Link>
          <Link href="/special-offer" passHref>
            <Button
              as="a"
              variant="solid"
              colorScheme="brand"
              mr={3}
              fontWeight="bold"
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.2s"
              bg={useColorModeValue("brand.500", "brand.500")}
              color={useColorModeValue("white", "white")}
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
              Special Offer!
            </Button>
          </Link>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
