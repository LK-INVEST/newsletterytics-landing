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
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { FaApple } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
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
        minHeight="60vh"
        display="flex"
        alignItems="center"
        pt={{ base: 8, md: 0 }}
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
          >
            <VStack
              spacing={{ base: 4, md: 8 }}
              align={{ base: "center", md: "flex-start" }}
              textAlign={{ base: "center", md: "left" }}
              w="100%"
            >
              <MotionHeading
                as="h1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="extrabold"
                color={useColorModeValue("brand.600", "brand.400")}
                textTransform="uppercase"
                letterSpacing="wide"
                mb={{ base: 2, md: 0 }}
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
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                maxWidth={{ base: "100%", sm: "400px" }}
              >
                <Button
                  as="a"
                  href="https://apps.apple.com/us/app/newsletterytics/id6505141597"
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<FaApple />}
                  variant="solid"
                  width="100%"
                  colorScheme="brand"
                  fontWeight="bold"
                  my={2}
                  bg={useColorModeValue("black", "white")}
                  color={useColorModeValue("white", "black")}
                  _hover={{
                    bg: useColorModeValue("gray.800", "gray.200"),
                  }}
                  size="lg"
                >
                  Download on the App Store
                </Button>
              </MotionBox>
              <a
                href="https://www.producthunt.com/posts/newsletterytics?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-newsletterytics"
                target="_blank"
              >
                <Image
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=481123&theme=light"
                  alt="Newsletterytics - Track&#0032;your&#0032;Beehiiv&#0039;s&#0032;newsletter&#0032;stats&#0032;on&#0032;the&#0032;go&#0046; | Product Hunt"
                  w="250px"
                  h="55px"
                  width="250"
                  height="54"
                />
              </a>
            </VStack>

            <MotionBox
              ref={containerRef}
              position="relative"
              width={{ base: "50%" }}
              height="0"
              paddingBottom={{ base: "100%", md: "70%" }}
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
                borderRadius="60px"
                overflow="hidden"
                transform="perspective(1000px) rotateY(-10deg) rotateX(5deg)"
                boxShadow="0 0 15px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.3)"
                bg={useColorModeValue("gray.900", "gray.900")}
              >
                <Box
                  position="absolute"
                  top="10px"
                  left="10px"
                  right="10px"
                  bottom="10px"
                  borderRadius="50px"
                  overflow="hidden"
                >
                  <AnimatePresence initial={false} custom={currentImageIndex}>
                    <MotionImage
                      key={currentImageIndex}
                      src={`slider/${images[currentImageIndex]}`}
                      alt={`Featured image ${currentImageIndex + 1}`}
                      objectFit="cover"
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
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
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
