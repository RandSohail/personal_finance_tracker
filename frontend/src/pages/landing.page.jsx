import React from "react";
import {
  Hero,
  NavBar,
  WhySection,
  UserStatisticsSection,
  Footer,
} from "../components";

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhySection />
      <UserStatisticsSection />
      <Footer />
    </div>
  );
}
