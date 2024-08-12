/** @format */

"use client";

import { useColorMode } from "@chakra-ui/react";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import Testimonials from "./Testimonials";

export default function HomeContent() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <>
      <Hero />
      <FeatureSection
        title="Real-time Analytics"
        description="Get instant insights into your newsletter's performance. Track opens, clicks, and subscriber growth in real-time."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-4.png"
            : "mockup/screenshot-light-4.png"
        }
      />
      <FeatureSection
        title="Multi-Newsletter Management"
        description="Manage multiple newsletters from a single dashboard. Compare performance and streamline your workflow."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-3.png"
            : "mockup/screenshot-light-3.png"
        }
        isReversed
      />
      <FeatureSection
        title="HomeScreen Widget"
        description="Keep your key metrics at your fingertips with a customizable HomeScreen widget."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-1.png"
            : "mockup/screenshot-light-1.png"
        }
      />
      <Testimonials />
    </>
  );
}
