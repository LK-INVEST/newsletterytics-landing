/** @format */

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isDarkMode = useColorModeValue(false, true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 4;
        setDirection(nextIndex === 0 ? -1 : 1); // Change direction when looping back to the first image
        return nextIndex;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

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

  const getVariants = (index: number) => {
    switch (index) {
      case 0: // screenshot-1 to screenshot-2 (bottom to top)
        return {
          enter: { y: "100%", opacity: 0 },
          center: { y: 0, opacity: 1 },
          exit: { y: "-100%", opacity: 0 },
        };
      case 1: // screenshot-1 to screenshot-2 (right to left)
        return {
          enter: { y: "100%", opacity: 0 },
          center: { y: 0, opacity: 1 },
          exit: { x: "-100%", opacity: 0 },
        };
      case 2: // screenshot-3 to screenshot-4 (right to left)
        return {
          enter: { x: "100%", opacity: 0 },
          center: { x: 0, opacity: 1 },
          exit: { x: "-100%", opacity: 0 },
        };
      case 3: // screenshot-4 to screenshot-1 (top to bottom)
        return {
          enter: { x: "100%", opacity: 0 },
          center: { x: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
        };
      default:
        return {};
    }
  };

  return (
    <Box
      bg={useColorModeValue("rgba(255,255,255,0.8)", "rgba(0,0,0,0.6)")}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
    >
      <Box
        bg={useColorModeValue("rgba(255,255,255,0.8)", "rgba(0,0,0,0.6)")}
        minHeight="80vh"
        display="flex"
        alignItems="center"
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            <VStack
              spacing={8}
              align={{ base: "center", md: "flex-start" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <MotionHeading
                as="h1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="extrabold"
                color={useColorModeValue("brand.600", "brand.400")}
                textTransform="uppercase"
                letterSpacing="wide"
              >
                NEWSLETTERYTICS
              </MotionHeading>
              <MotionText
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color={useColorModeValue("gray.700", "gray.200")}
                maxW="2xl"
                textTransform="uppercase"
              >
                YOUR BEEHIIV NEWSLETTER STATS, RIGHT IN YOUR POCKET
              </MotionText>
              <MotionButton
                as="a"
                href="#" // Replace with actual App Store link
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                height="44px"
                minWidth="156px"
                backgroundColor="black"
                color="white"
                _hover={{ backgroundColor: "gray.800" }}
                borderRadius="8px"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="medium"
                fontSize="md"
                leftIcon={<AppleIcon />}
                px={4}
              >
                Download on the
                <Box
                  as="span"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  ml={2}
                >
                  <Text fontSize="xs" fontWeight="normal">
                    App Store
                  </Text>
                </Box>
              </MotionButton>
            </VStack>

            <MotionBox
              ref={containerRef}
              position="relative"
              width={{ base: "80%", md: "40%" }}
              height="0"
              paddingBottom={{ base: "160%", md: "80%" }}
              mt={{ base: 8, md: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onMouseMove={handleMouseMove}
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                borderRadius="40px"
                overflow="hidden"
                transform="perspective(1000px) rotateY(-10deg) rotateX(5deg)"
                boxShadow="0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.4)"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-10%",
                  left: "-10%",
                  right: "-10%",
                  bottom: "-10%",
                  background:
                    "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
                  transform: "rotate(-45deg)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  boxShadow:
                    "0 0 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(255, 255, 255, 0.7)",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                  zIndex: 2,
                }}
                transition="box-shadow 0.3s ease-in-out"
                _hover={{
                  boxShadow:
                    "0 0 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(255, 255, 255, 0.7)",
                  // transition: "opacity 0.3s ease-in-out",
                  // "&::after": {
                  //   opacity: 1,
                  // },
                }}
              >
                <AnimatePresence initial={false} custom={currentImageIndex}>
                  <MotionImage
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`Featured image ${currentImageIndex + 1}`}
                    objectFit="cover"
                    // width="100%"
                    // height="100%"
                    position="absolute"
                    custom={currentImageIndex}
                    variants={getVariants(currentImageIndex)}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </Box>
            </MotionBox>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

const AppleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

export default Hero;
