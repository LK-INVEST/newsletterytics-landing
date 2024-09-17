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
        title="Optimize Newsletter"
        description="Analyze your newsletter with precision, receive a performance score, and discover actionable suggestions tailored to your unique posts and overall newsletter."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-5.png"
            : "mockup/screenshot-light-5.png"
        }
      />
      <FeatureSection
        title="Generate Content Ideas"
        description="AI-powered tool carefully analyzes your previous newsletters and any information you provide to generate fresh, engaging content ideas—just for you."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-6.png"
            : "mockup/screenshot-light-6.png"
        }
        isReversed
      />
      <FeatureSection
        title="Edit Generated Ideas"
        description="You can easily edit and refine your generated content ideas in the Markdown editor."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-7.png"
            : "mockup/screenshot-light-7.png"
        }
      />
      <FeatureSection
        title="Save and Export Content"
        description="All generated content can be seamlessly updated, saved, and exported in Markdown format, making it easier than ever to stay organized and share across platforms."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-8.png"
            : "mockup/screenshot-light-8.png"
        }
        isReversed
      />
      <FeatureSection
        title="Real-time Analytics"
        description="Get instant insights into your newsletter's performance. Track opens, clicks, and subscriber growth in real-time."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-3.png"
            : "mockup/screenshot-light-3.png"
        }
      />
      <FeatureSection
        title="Multi-Newsletter Management"
        description="Manage multiple newsletters from a single dashboard. Compare performance and streamline your workflow."
        imageUrl={
          isDarkMode
            ? "mockup/screenshot-dark-4.png"
            : "mockup/screenshot-light-4.png"
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
