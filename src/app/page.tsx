/** @format */

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeatureSection
        title="Real-time Analytics"
        description="Get instant insights into your newsletter's performance. Track opens, clicks, and subscriber growth in real-time."
        imageUrl="/feature-analytics.png"
      />
      <FeatureSection
        title="Multi-Newsletter Management"
        description="Manage multiple newsletters from a single dashboard. Compare performance and streamline your workflow."
        imageUrl="/feature-management.png"
        isReversed
      />
      <FeatureSection
        title="HomeScreen Widget"
        description="Keep your key metrics at your fingertips with our customizable HomeScreen widget."
        imageUrl="/feature-widget.png"
      />
      <Testimonials />
      <Footer />
    </>
  );
}
